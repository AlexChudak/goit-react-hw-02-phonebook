import style from './ContactItem.module.css';
import PropTypes from 'prop-types';

const ContactItem = ({ id, name, number, onDeleteContact }) => {
    return (
        
        <li styleName={style.contactItem} >
            {name}:   {number}
            <button
                className={style.buttonDel}
                type="submit"
                onClick={( ) => onDeleteContact(id)}
            >
                Delete
            </button>
            </li>
           
    );
};

ContactItem.prototype = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
