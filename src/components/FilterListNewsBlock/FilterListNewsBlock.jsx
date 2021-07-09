import React from 'react';
import './filterListNewsBlock.sass';
import ListNewsBlock from "../ListNewsBlock/ListNewsBlock";
import ListFilterItem from "../ListFilterItem/ListFilterItem";

class FilterListNewsBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newsBlock: undefined,
      activeFilter: [true, false, false, false, false]
    };
    this.newsBlockAll = null;


    this.handlerFilterClick = this.handlerFilterClick.bind(this);
  }

  componentDidMount() {
    this.fetchNewsBlock();
  }
  //mock for fetch news block
  fetchNewsBlock() {
    const newsBlock = [
      {
        id: 0,
        colorCategory: '#000',
        category: 'В мире',
        title: 'Биткоин падает',
        author: '1'
      },
      {
        id: 1,
        colorCategory: '#0f0',
        category: 'События',
        title: 'React',
        author: '2'
      },
      {
        id: 2,
        colorCategory: '#0f0',
        category: 'События',
        title: 'React',
        author: '2'
      }
    ];

    this.newsBlockAll = newsBlock;

    setTimeout(() => {
      this.setState({
        newsBlock
      });
    }, 200);
  }

  handlerFilterClick(e) {
    if (!e.target.classList.contains('filterItem')) return;
    const textFilter = e.target.innerText;
    this.filterNewsBlockByCategory(textFilter.toLowerCase());
  }

  filterNewsBlockByCategory(categoryName) {
    const activeFilter = [false, false, false, false, false];

    let newsBlock;
    if (categoryName !== 'все') {
      newsBlock = this.newsBlockAll.filter(elem => (
        elem.category.toLowerCase() === categoryName
      ));
    } else {
      newsBlock = this.newsBlockAll;
    }

    this.setState({
      newsBlock,
      activeFilter
    });
  }

  render() {
    return (
      <div className="filterListNewsBlock">
        <div className="filterListNewsBlock__header">
          <h2 className="filterListNewsBlock__title">Последние <br/> новости</h2>
          <ListFilterItem
            handlerFilterClick={this.handlerFilterClick}
          />
        </div>
        <ListNewsBlock
          listNewsBlock={this.state.newsBlock}
        />
      </div>
    );
  }
}
export default FilterListNewsBlock;