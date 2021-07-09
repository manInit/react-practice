import React from "react";
import './NavHeader.sass';
import { faTwitter, faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class NavHeader extends React.Component {
  render() {
    const socialIconStyle = {
      color: 'white',
      iconSize: '16px'
    }

    return (
      <div className="navHeader">
        <div className="container">
          <nav className="navHeader__nav">
            <ul className="navHeader__links">
              <li className="navHeader__link"><a href="#">Новости</a></li>
              <li className="navHeader__link"><a href="#">События</a></li>
              <li className="navHeader__link"><a href="#">Анонсы</a></li>
              <li className="navHeader__link"><a href="#">Контакты</a></li>
            </ul>
          </nav>
          <ul className="navHeader__socials">
            <li className="navHeader__social">
              <a href="#">
                <FontAwesomeIcon style={socialIconStyle} icon={faFacebookF}/>
              </a>
            </li>
            <li className="navHeader__social">
              <a href="#">
                <FontAwesomeIcon style={socialIconStyle} icon={faTwitter}/>
              </a>
            </li>
            <li className="navHeader__social">
              <a href="#">
                <FontAwesomeIcon style={socialIconStyle} icon={faInstagram}/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavHeader;