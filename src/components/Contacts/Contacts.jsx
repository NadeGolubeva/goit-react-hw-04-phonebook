import PropTypes from 'prop-types';
import css from './Contacts.module.css'

export const ContactsDatas = ({ contactsInfo, onDelete}) => {
    return (
            <ul>
    {contactsInfo.map(contact => {
   return ( <li key={contact.id}>
       <p className={css.names}>{contact.name}: {contact.number}
           <button
               type="button"
               className={css.btn}
           onClick={() => {
               onDelete(contact.id)}}>Delete</button> </p>
    </li>)
     })}
 </ul>
    )
}

ContactsDatas.propTypes = {
    contactsInfo: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.number.isRequired
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
}