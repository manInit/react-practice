import React from 'react';
import './ListsNewsBlock.sass';
import NewsBlock from "../NewsBlock/NewsBlock";

class ListNewsBlock extends React.Component {
  render() {
    let { listNewsBlock = [], type } = this.props;
    const isMain = type === 'main';
    const flexDirection = isMain ? 'column' : 'row';
    const justifyContent = isMain ? '' : 'space-between';

    const componentsList = listNewsBlock.map((elem, index) => (
      <li key={elem.id} style={{
        flexGrow: elem.isLarge ? '1' : '0',
        width: isMain ? '50%' : 'auto'
      }}><NewsBlock
        colorCategory={elem.colorCategory}
        category={elem.category}
        title={elem.title}
        author={elem.author}
        isRow={elem.isRow}
        isReverse={elem.isReverse}
        //isMain - 8px
        marginBottom={index === 2 ? '0px' : isMain ? '8px' : undefined}
        fs={isMain ? '16px' : undefined}
        lh={isMain ? '23px' : undefined}
        isLarge={elem.isLarge}
      /></li>
    ));

    return (
      <ul className={"listNewsBlock " + this.props.className} style={{flexDirection, justifyContent}}>
        {componentsList}
      </ul>
    );
  }
}
export default ListNewsBlock;