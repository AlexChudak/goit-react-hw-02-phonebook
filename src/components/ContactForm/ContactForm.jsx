import React, { Component } from 'react';
import PropType from 'prop-types';
import style from './ContactForm.module.css'
import shortid from 'shortid';


class ContactForm extends Component {
    initialState = {
        name: '',
        number: '',
    };
    state = {
        name: '',
        number:'',
    }

    nameInputId = shortid.generate();
    numberInputId = shortid.generate();

    handleChange = event => {
        const { name, value } = event.currentTarget;
        this.setState({[name]:value})
    }
    handleSubmit = event => {
        event.preventDefault();
        const contact = {
            id: shortid.generate(),
            name: this.state.name,
            number: this.state.number,
        }

        this.props.onSubmit(contact);

        this.reset();
    };

    reset = () => {
        this.setState(this.initialState);
    }

    render() {
        const { name, number } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor={this.nameInputId}>
                    Name
                    <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                        value={name}
                        onChange={this.handleChange}
                        id={this.nameInputId}/>
                </label>
                <label htmlFor={this.numberInputId}>
                    Number
                    <input
                    type="tel"
                     name="number"
                     pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                     title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required
                        value={number}
                        onChange={this.handleChange}
                        id={this.numberInputId}
                    /> 
                </label>
                <button className={style.button} type="submit">
                    Add contact</button>
            </form>
        )
    }
}

ContactForm.PropType = {
    onSubmit:PropType.func.isRequired,
}

export default ContactForm;