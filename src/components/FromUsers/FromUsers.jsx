import React, { Component } from 'react';
import './fromUsers.sass';

export class FromUsers extends Component {
  render() {
    const { name, userLink, isOneLine = false} = this.props;

    return (
      <div className="fromUsers">
        От
        <a href={userLink}> Пользователя
          <span className="fromUsers__name">{' ' + name}</span>
        </a> -
        <span className="fromUsers__date"> 21 {isOneLine ? '' : <br/>} янв. 2021</span>
      </div>
    );
  }
}

export default FromUsers;
