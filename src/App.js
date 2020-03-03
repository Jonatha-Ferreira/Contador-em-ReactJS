import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  state = {
    contador: 10
  };
  add = () => {
    this.setState({ contador: this.state.contador + 1 });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Contador em ReactJS</h1>
          <h2>{this.state.contador}</h2>
          <button onClick={this.add}>+</button>
        </header>
      </div>
    );
  }
}

export default App;
