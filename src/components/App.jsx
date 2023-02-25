import { Component } from 'react';
import initialValue from '../json/initialValue';
import { Section } from './Section/Section';
import { PhonebookForm } from './PhonebookComponent/Form/Form';
import { ContactList } from './PhonebookComponent/ContactList/ContactList';
import { Filter } from './PhonebookComponent/Filter/Filter';

export class App extends Component {
  state = {
    contacts: initialValue,
    filter: '',
  };

  addContact = contact => {
    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleFilterChange = event => {
    const { value } = event.currentTarget;

    this.setState({ filter: value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedValue = filter.toLowerCase().trim();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedValue)
    );
  };

  clearFilterField = () => {
    this.setState({ filter: '' });
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <>
        <Section title="Add new contacts">
          <PhonebookForm
            contacts={contacts}
            addContact={this.addContact}
          ></PhonebookForm>
        </Section>

        <Section title="Filter contacts">
          <Filter
            onChange={this.handleFilterChange}
            value={filter}
            onClick={this.clearFilterField}
          ></Filter>
        </Section>

        <Section title="Contact List">
          <ContactList
            contactList={this.getFilteredContacts()}
            onDelete={this.deleteContact}
          ></ContactList>
        </Section>
      </>
    );
  }
}
