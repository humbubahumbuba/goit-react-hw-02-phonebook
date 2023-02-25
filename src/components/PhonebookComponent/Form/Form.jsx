import PropTypes from 'prop-types';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import { Button, Form, FormWrapper } from './Form.styled';

export class PhonebookForm extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
    addContact: PropTypes.func,
  };

  handleInputChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    const { contacts, addContact } = this.props;
    const { name, number } = this.state;
    const contact = { id: nanoid(), name, number };

    const alreadyExists = contacts.findIndex(item => {
      const name = item.name.toLowerCase();
      const newName = contact.name.toLowerCase();
      return name === newName;
    });

    if (alreadyExists >= 0) {
      Notify.failure(`${contact.name} is already added to contact list`);
      return;
    } else {
      addContact(contact);
    }

    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.handleFormSubmit}>
        <FormWrapper>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Enter name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={this.handleInputChange}
            required
          />

          <input
            type="tel"
            name="number"
            value={number}
            placeholder="Enter phone number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={this.handleInputChange}
            required
          />
        </FormWrapper>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}
