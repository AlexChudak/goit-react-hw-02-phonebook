import React, { Component } from 'react';
import ContactForm from './components/ContactForm';
import Container from './components/Container'
import ContactList from './components/ContactList';


class App extends Component {

 state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
 };
  
  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value })
  };

  addContact = contact => {
    if (!this.hasContacts(contact.name)) {
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));

    } else {
      alert(`${contact.name} is already in contacts`);
    }
  };
  
  
  
  hasContacts = name => {
    return this.state.contacts.find(contact => {
      return contact.name.toLocaleLowerCase() === name.toLocaleLowerCase();
    });
  };
  
  findContact = () => {
    const { filter, contacts } = this.state;
    
  }





  render() {
    return (
      <Container>  
  <h1>Phonebook</h1>
  <ContactForm onSubmit={this.addContact} />
<div>
  <h2>Contacts</h2>
  {/* <Filter ... /> */}
  <ContactList findContact={this.findContact}
            onDeleteContact={this.deleteContact}/>
</div>
</Container> 
    )
  }
}
 export default App

