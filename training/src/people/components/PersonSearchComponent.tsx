import React, { ChangeEvent } from 'react'
import Button from 'react-bootstrap/Button'

import {peopleModel} from '../ApplicationContext'
import { Person } from '../model/People'
import PersonComponent from './PersonComponent'
type stateType = {
    fields: {
      id: number
    },
    result?:Person

  }

export default class PersonSearchFormComponent extends React.PureComponent<{}, stateType>{
  
    state:stateType = {
      fields: {
        id: 0
      }
    }
  
    handleFormSubmit = (event:any) => {
      event.preventDefault();
      const searchResult = peopleModel.findById(Number(this.state.fields.id))
      this.setState({result: searchResult})

    }
    handleChange = (event:ChangeEvent<HTMLInputElement>) => {
      let target = event.target
      let result:any = this.state.fields
      result[target.name] = target.value
      this.setState(result)
    }
    render(){
      let searchResultHtml = (<></>)
      if (this.state.result){
        searchResultHtml = <PersonComponent detail={false} person={this.state.result} />
      }
      return (
        <>
        <input placeholder="Id" name="id" value={this.state.fields.id} onChange={this.handleChange}></input>
        <Button variant="outline-primary" onClick={this.handleFormSubmit}>Search Person</Button>
        {searchResultHtml}
        </>
      )
    }
  
  }
  