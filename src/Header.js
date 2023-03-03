import React from "react";
import FormFilter from "./FormFilter";
import SearchForm from "./SearchForm";
import "./Header.css"

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Horned Beasts</h1>
        <SearchForm 
          searchInput={this.props.searchInput}
          ongoingSearch={this.props.ongoingSearch} 
        />
        <FormFilter 
          data={this.props.data}
          filterInput={this.props.filterInput}
          ongoingInput={this.props.ongoingInput}
        />
      </header>
    )
  }
}

export default Header;