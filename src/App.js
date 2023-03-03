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
      title: '',
      filterInput: 0,
      filteredData: data,
      searchInput: ''
    }
  }

  getSelectedBeast = (imgSource, title, description) => {
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

  handleFilterSubmit = (e) => {
    e.preventDefault();

    let newData = data.filter(beast => {
      if (parseInt(this.state.filterInput) !== 0) {
        return beast.horns === parseInt(this.state.filterInput)
      } else {
        return true;
      }
    })

    this.setState({
      filteredData: newData
    })
  }

  handleOngoingSelect = (e) => {
    this.setState({
      filterInput: e.target.value
    });
  }

  handleOngoingInput = (e) => {
    this.setState({
      searchInput: e.target.value
    });
  }

  handleSearchSubmit = (e) => {
    e.preventDefault();

    let newData = data.filter(beast => {
      let re = new RegExp(`\\b${this.state.searchInput}`, 'i');
      return re.test(beast.title);
    });

    this.setState({
      filteredData: newData
    });
  }

  render() {
    return (
      <>
        <Header
          data={data}
          searchInput={this.handleSearchSubmit}
          ongoingSearch={this.handleOngoingInput} 
          filterInput={this.handleFilterSubmit}
          ongoingInput={this.handleOngoingSelect}
        />
        <Main
          data={this.state}
          modalInfo={this.getSelectedBeast}
        />
        <Footer />
        <SelectedBeast
          selected={this.state}
          closeModal={this.handleCloseModal}
        />
      </>
    );
  }
}

export default App;
