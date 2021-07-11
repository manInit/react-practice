import React, { Component } from 'react';
import './newsLine.sass';
import { faBolt, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class NewsLine extends Component {
  render() {
    return (
      <div className="newsLine">
        <div className="container">
          <div className="newsLine__title">
            <FontAwesomeIcon icon={faBolt}/>
            <h3>Новости</h3>
          </div>
          <div className="newsLine__content">
            Такие то запросы или любые параметры
          </div>
          <div className="newsLine__btns">
            <div className="newsLine__btn newsLine__btn_left">
              <FontAwesomeIcon icon={faAngleLeft}/>
            </div>
            <div className="newsLine__btn newsLine__btn_right">
              <FontAwesomeIcon icon={faAngleRight}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsLine;
