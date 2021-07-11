import React, { Component } from 'react';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './searchInput.sass';

export class SearchInput extends Component {
  render() {
    const searchIconStyle = {
      color: '#2AA9E6'
    };

    return (
      <div className={"searchInput " + this.props.className}>
        <FontAwesomeIcon style={searchIconStyle} icon={faSearch}/>
      </div>
    );
  }
}

export default SearchInput;
