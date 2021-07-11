import React from "react";
import NavHeader from "../../components/NavHeader/NavHeader";
import FilterListNewsBlock from "../../components/FilterListNewsBlock/FilterListNewsBlock";
import ListNewsBlock from "../../components/ListNewsBlock/ListNewsBlock";
import './main.sass';
import Header from "../../components/Header/Header";


class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mainNews: undefined };
  }

  componentDidMount() {
    this.fetchMainNews();
  }

  fetchMainNews() {
    const mainNews = [
      {
        id: 0,
        colorCategory: '#3E3EDD',
        category: 'В мире',
        title: 'Говорим о много всяком интересном',
        author: '1',
        isRow: true,
        isReverse: true
      },
      {
        id: 1,
        colorCategory: '#3E3EDD',
        category: 'Мода',
        title: 'Побежали побежали, наши пальчики устали',
        author: '1',
        isRow: true,
        isReverse: false
      },
      {
        id: 2,
        colorCategory: '#3E3EDD',
        category: 'Бизнес',
        title: 'Побежали побежали, наши пальчики устали',
        author: '1',
        isRow: true,
        isReverse: true
      },
      {
        id: 3,
        colorCategory: '#3E3EDD',
        category: 'Бизнес',
        title: 'Гитара лучший инструмент',
        author: '1',
        isLarge: true
      }
    ];

    setTimeout(() => {
      this.setState({
        mainNews
      });
    });
  }

  render() {
    return (
      <main className="mainPage">
        <NavHeader
          className="mainPage__navHeader"
        />
        <Header/>
        <div className="container">
          <ListNewsBlock
            className="mainPage__news"
            listNewsBlock={this.state.mainNews}
            type="main"
          />
          <FilterListNewsBlock className="mainPage__filersNews" />
        </div>

      </main>
    );
  }
}

export default MainPage;