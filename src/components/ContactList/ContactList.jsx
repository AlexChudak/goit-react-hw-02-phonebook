import ContactItem from '../ContactItem/ContactItem';
import PropTypes from 'prop-types';
import style from './ContactList.module.css';

const ContactList = ({ findContact, onDeleteContact }) => {
    return (
        <ul className={style.contactList} >
            {findContact().map(({ id, name, number }) => {
                return (
                    <ContactItem
                        key={id}
                        id={id}
                        name={name}
                        number={number}
                        onDeleteContact={onDeleteContact} />
                );
            })}
        </ul>
    );
};

ContactList.prototype = {
    findContact: PropTypes.func.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;