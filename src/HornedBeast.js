import React from "react";

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
      <>
        <h2>{this.props.title}</h2>
        <p>{this.state.favorited === 0 ? `🤍 Favorited ${this.state.favorited} times.` : `❤️ Favorited ${this.state.favorited} times.`}</p>
        <img src={this.props.imageUrl} alt={this.props.title} onClick={this.handFavorited}></img>
        <p>{this.props.description}</p>
      </>
    )
  }
}

export default HornedBeast;