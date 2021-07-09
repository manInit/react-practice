import React from 'react';
import FilterItem from "../FilterItem/FilterItem";
import './listFilerItem.sass';

class ListFilterItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filtersElem: undefined,
      activeFilter: [true, false, false, false, false]
    };
  }

  componentDidMount() {
    this.fetchCategory();
  }
  //fetch mock category
  fetchCategory() {
    const filtersElem = [
      {
        id: 0,
        text: 'Все'
      },
      {
        id: 1,
        text: 'В мире'
      },
      {
        id: 2,
        text: 'События'
      },
      {
        id: 3,
        text: 'Бизнес'
      },
      {
        id: 4,
        text: 'Мода'
      }
    ];

    setTimeout(() => {
      this.setState({
        filtersElem
      });
    }, 200);
  }

  handlerFilterClick(elemId) {
    const activeFilter = [].fill(false, 0, this.state.filtersElem.length);
    activeFilter[elemId] = true;

    this.setState({
      activeFilter
    });
  }

  render() {
    const filterItem = this.state.filtersElem ?? [];

    const filterComponents = filterItem.map(elem => (
      <FilterItem
        key={elem.id}
        isActive={this.state.activeFilter[elem.id]}
        text={elem.text}
        onClick={() => this.handlerFilterClick(elem.id)}
      />
    ));

    return (
      <ul
        onClick={this.props.handlerFilterClick}
        className="filters"
      >
        { filterComponents }
      </ul>
    );
  }
}
export default ListFilterItem;