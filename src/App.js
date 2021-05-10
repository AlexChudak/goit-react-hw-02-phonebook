import React, { Component } from 'react';
import Form from './Form';

class App extends Component {
 
  formSubmitHandler = data => {
    console.log(data);
  }
 

  render() {
    return (
      <div>
      <Form onSubmit={this.formSubmitHandler} />

    
</div>

    )
  }
}
 export default App

