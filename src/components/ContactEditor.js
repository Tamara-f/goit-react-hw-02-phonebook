import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContactList from './ContactList';

export default class ContactEditor extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onAddContact(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">
            Name
            <br />
            <input
              type="text"
              value={name}
              onChange={this.handleChange}
              name="name"
            />
          </label>
          <label htmlFor="number">
            Number
            <br />
            <input
              type="text"
              value={number}
              onChange={this.handleChange}
              name="number"
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}
ContactList.PropTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
