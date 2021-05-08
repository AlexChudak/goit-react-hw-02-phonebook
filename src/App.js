import React, { Component } from 'react';

class App extends Component {
  state ={
   inputValue:'revr'
  }

  handleInputChange = e => {
    console.log(e);
  }


  render() {
    return (
      <input type="text"
        value={this.state.inputValue}
        onChange={this.handleInputChange} />



    )
  }
}
 export default App

