import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './FormFilter.css';

class FormFilter extends React.Component {
  
  render() {
    let options = this.props.data.map(beast => beast.horns)
      .filter((value, idx, self) => self.indexOf(value) === idx);

    options = options.map((option, idx) => {
      return (
        <option value={option} key={idx}>{option}</option>
      )
    });
    
    return (
      <Form onSubmit={this.props.filterInput}>
        <Form.Select onChange={this.props.ongoingInput}>
          <option value="0">All Horned Beast</option>
          {options}
        </Form.Select>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
  
}

export default FormFilter;