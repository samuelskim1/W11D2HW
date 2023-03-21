import { Component } from "react";
import FunctionComponentTwo from "./FunctionComponentTwo";

class ClassComponentOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      message: ""
    };
  }
  render() {
    return (
      <div className="center">
        <h1>Class Component One</h1>
        <div className="one">
          <button
            onClick={() => {
              this.setState((prevState) => ({
                count: prevState.count - 1
              }));
            }}
          >
            Decrement
          </button>
          <button
            onClick={() => {
              this.setState((prevState) => ({
                count: prevState.count + 1
              }));
            }}
          >
            Increment
          </button>

          <input
            type="text"
            value={undefined}
            onChange={(e) => {
              this.setState({ message: e.target.value });
            }}
            placeholder="Enter Your Message"
          />
          <button onClick={() => this.setState({ message: "" })}>Clear</button>
        </div>

        <FunctionComponentTwo
          count={this.state.count}
          message={this.state.message}
        />
      </div>
    );
  }
}

export default ClassComponentOne;
