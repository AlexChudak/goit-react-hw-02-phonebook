import { Component } from "react";
import shortid from 'shortid';

class Form extends Component {
     state = {
    name: '',
         tag: '',
    experience:'junior'
  };
   
    nameInputId = shortid.generate();
    tagInputId = shortid.generate();


     handleChange = e => {
    const { name, value } = e.currentTarget;
         this.setState({ [name]: value });
   
  }
  
  onHandleSubmit = e => {
    e.preventDefault();
      console.log(this.state);
      
      this.reset();
  }
    
    reset = () => {
        this.setState({ name: '',tag: ''})
    }
    
    
    render() {

        return (
 <form onSubmit={this.onHandleSubmit}>
        <label htmlFor={this.nameInputId} >
                    Имя <input type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        id={this.nameInputId}/>
        </label>
        <label htmlFor={this.tagInputId} >
                    Прозвище <input type="text"
                        name="tag"
                        value={this.state.tag}
                        onChange={this.handleChange}
                        id={this.tagInputId}/>
        </label>
                
                
                <p>Your Level</p>
                <label>
                    <input type="radio"
                        name="experience"
                        value="junior"
                        onChange={this.handleChange}
                        checked={ this.state.experience==='junior'}/>Junior
                </label>
                <label>
                    <input type="radio"
                        name="experience" value="middle"
                        onChange={this.handleChange}
                        checked={this.state.experience === 'middle'} />Middle
                </label>
                <label>
                    <input type="radio"
                        name="experience" value="senior"
                        onChange={this.handleChange}
                        checked={this.state.experience === 'senior'} />Senior
                    <button type="submit" >Send</button>
                </label>
     </form>
     
        )
    }
}

export default Form;