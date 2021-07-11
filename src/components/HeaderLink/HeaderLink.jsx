import React, { Component } from 'react';
import './headerLink.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

export class HeaderLink extends Component {
  render() {
    const angleStyle = {
      color: '#2AA9E6',
      iconSize: '16px',
      marginLeft: '7px',
    };

    return (
      <li className="headerLink">
        <a href={this.props.link}>
          {this.props.children} 
          {this.props.hasAngle ? <FontAwesomeIcon  style={angleStyle} icon={faAngleDown}/> : ''}
        </a>
      </li>
    );
  }
}

export default HeaderLink;
