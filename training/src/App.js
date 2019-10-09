import React from 'react';
import './App.css';
import PeopleHeaderComponent from './main/component/PeopleHeaderComponent'
import PeopleFooterComponent from './main/component/PeopleFooterComponent'
import 'bootstrap/dist/css/bootstrap.min.css';
//import PeopleAppComponent from './people/component/PeopleAppHookComponent'
import PeopleAppComponent from './people/component/PeopleAppComponent'
import PeopleFromServerComponent from './people/component/PeopleFromServerComponent'
import LoggingComponent from './logging/component/LoggingComponent'
function App() {
  return (
    <div className="App">
    <PeopleHeaderComponent />
    <PeopleAppComponent />
    <hr />
    <PeopleFromServerComponent />
    <LoggingComponent numberOfMessages="3" />
    <PeopleFooterComponent />
    </div>
  );
}

export default App;