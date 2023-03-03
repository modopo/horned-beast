import React from "react";
import Card from 'react-bootstrap/Card';


class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorited: 0
    };
  }

  handleFavorited = () => {
    this.setState({
      favorited: this.state.favorited + 1,
    });
  }

  handleClick = () => {
    this.handleFavorited();
    this.props.modalInfo(this.props.imageUrl, this.props.title, this.props.description);
  }
  

  render() {
    return (
      <Card style={{width: '18rem'}} className='hornedBeast'>
        <Card.Img 
          variant='top' 
          src={this.props.imageUrl} 
          alt={this.props.title} 
          onClick={this.handleClick}
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