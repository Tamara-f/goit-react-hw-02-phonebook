import React, { Component } from 'react';
import Section from './Section';
import ContactList from './ContactList';
import ContactEditor from './ContactEditor';
import Filter from './Filter';
import { v4 as uuidv4 } from 'uuid';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  checkSame = name => {
    return this.state.contacts.find(contact => contact.name === name);
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name: name,
      number: number,
    };

    this.checkSame(name)
      ? alert('same name!!!')
      : this.setState(prevState => {
          return { contacts: [...prevState.contacts, contact] };
        });
  };

  removeContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  changeFilter = filter => {
    this.setState({ filter });
  };
  getFilterName = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const { filter } = this.state;
    const filterContacts = this.getFilterName();
    return (
      <Section>
        <ContactEditor onAddContact={this.addContact} />
        <h2>Contacts</h2>
        {filterContacts.length > 0 && (
          <Filter value={filter} OnChangeFilter={this.changeFilter} />
        )}
        {filterContacts.length > 0 && (
          <ContactList
            contacts={filterContacts}
            onRemovecontact={this.removeContact}
          />
        )}
      </Section>
    );
  }
}
