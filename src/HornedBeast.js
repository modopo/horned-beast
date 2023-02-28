import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorited: 0
    };
  }

  handFavorited = () => {
    this.setState({
      favorited: this.state.favorited + 1,
    });
  }

  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img 
          variant='top' 
          src={this.props.imageUrl} 
          alt={this.props.title} 
          onClick={this.handFavorited}
          className='hornedBeast'
        />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <Card.Text>
            {this.state.favorited === 0 ? `🤍 Favorited ${this.state.favorited} times.` : `❤️ Favorited ${this.state.favorited} times.`}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeast;