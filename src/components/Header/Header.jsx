import React from "react";
import LogoBlocks from "../LogoBlocks/LogoBlocks";
import './Header.sass';
import HeaderLink from "../HeaderLink/HeaderLink";
import SearchInput from "../SearchInput/SearchInput";
class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="header__logo">
            <LogoBlocks className="header__blocks"/>
            <h1 className="header__title">Baikal info</h1>
          </div>
          <nav className="header__links">
            <ul>
              <HeaderLink link="#" hasAngle={true}>Главная</HeaderLink>
              <HeaderLink link="#" hasAngle={true}>Публикации</HeaderLink>
              <HeaderLink link="#" hasAngle={true}>Блоги</HeaderLink>
              <HeaderLink link="#" hasAngle={true}>Интересное</HeaderLink>
              <HeaderLink link="#" hasAngle={false}>Подписки</HeaderLink>
            </ul>
          </nav>
          <div className="header__search">
            <SearchInput/>
          </div>
        </div>

      </header>
    );
  }
}

export default Header;
