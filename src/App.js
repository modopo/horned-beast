import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import SelectedBeast from './SelectedBeast';
import data from "./data.json";


class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      imageUrl: '',
      description: '',
      title: ''
    }
  }

  handleOpenModal = (imgSource, title, description) => {
    this.setState({
      showModal: true,
      imageUrl: imgSource,
      description: description,
      title: title
    })
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }

  render() {
    return (
      <>
        <Header />
        <Main 
          data={data}
          openModal={this.handleOpenModal}
        />
        <Footer />
        <SelectedBeast
          showModal={this.state.showModal}
          selected={this.state}
          closeModal={this.handleCloseModal}
        />
      </>
    );
  }
}

export default App;
