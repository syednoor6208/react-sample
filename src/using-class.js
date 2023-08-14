import { Component } from "react";

export default class ClassCounter extends Component {
  constructor(props) {
    //To set inside base compoent
    super(props);
    //State creation
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h3>Counter Example with Class Compoent</h3>
        <div>
          <span>{this.state.count}</span>
        </div>
        <div>
          <button onClick={this.increment.bind()}>Increment</button>
        </div>
      </div>
    );
  }
}
