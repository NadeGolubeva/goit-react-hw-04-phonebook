import PropTypes from 'prop-types';
import { useState } from 'react';
import css from './FormContact.module.css';


export const FormContact = ({addContact}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

const onChangeInput = e => {
  const { name, value } = e.currentTarget;
  name === 'name' ? setName(value) : setNumber(value);
};

   return (
      <>
        <form
          onSubmit={e => {
            e.preventDefault();
            addContact({name, number});
           setName('');
           setNumber('');
          }}
        >
          <label name="name"
          className={css.labelForm}>
            Name
            <input
              className={css.formInput}
              type="text"
              name="name"
              onChange={onChangeInput}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={name}
              required
            />
          </label>{' '}
          <br />
          <label name="number"
           className={css.labelForm}>
            Number
            <input   className={css.formInput}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              onChange={onChangeInput}
              value={number}
              required
            />
          </label>
          <br />
          <button   className={css.btnForm} type="submit">Add contact</button>
        </form>
      </>
    );
}


FormContact.propTypes = {
  addContact: PropTypes.func.isRequired,
};
