import React from 'react';
import './filterItem.sass';

class FilterItem extends React.Component {


  render() {
    const color = this.props.isActive ? '#2D95E3' : '#000';

    return (
      <li
        className="filterItem"
        onClick={this.props.onClick}
        style={{color}}
      >
        {this.props.text}
      </li>
    );
  }
}
export default FilterItem;