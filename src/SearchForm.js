import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './SearchForm.css';

class SearchForm extends React.Component {
  
  render() {
    
    return (
      <Form onSubmit={this.props.searchInput}>
        <Form.Control 
          type="text" 
          placeholder="Search..."
          onChange={this.props.ongoingSearch}
        />
        <Button type="submit">Search</Button>
      </Form>
    );
  }
  
}

export default SearchForm;