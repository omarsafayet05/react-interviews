import React, { Component } from "react";

class ClassCom extends Component {
  constructor() {
    super();
    this.state = {
      name: "Shanto",
      age: 33,
      array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  }

  changeStatus = () => {
    this.setState({ age: this.state.age * 2, name: "Mahian" });
  };
  reset = () => {
    this.setState({ age: this.state.age / 2, name: "Shanto" });
  };
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.state.age}</h1>
        <h1>
          {this.state.array.map((item) => {
            return item * 2;
          })}
        </h1>
        <button onClick={this.changeStatus}>Change Status</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default ClassCom;
