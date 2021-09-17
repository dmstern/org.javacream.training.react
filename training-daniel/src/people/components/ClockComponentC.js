import { Component } from "react";

export default class ClockComponentC extends Component {
  constructor() {
    super();
    this.state = { time: new Date() };
  }
  
  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  render() {
    return (
      <time>Es ist jetzt {this.state.time.toLocaleTimeString()} Uhr.</time>
    );
  }
}
