import React from 'react';
import CategoryBadge from "../CategoryBadge/CategoryBadge";
import './NewsBlock.sass';

class NewsBlock extends React.Component {
  render() {
    let {
      isLarge = false ,
      isRow = false,
      isReverse = false,
      marginBottom = '31px',
      fs="21px",
      lh="31px"
    } = this.props;

    let width = isRow ? '50%' : '386px';
    let height = isRow ? '182px' : '516px';
    let imageHeight = '270px';
    let flexDirection;
    if (isRow) flexDirection = 'row';
    else flexDirection = 'column';

    if (isReverse) flexDirection += '-reverse';

    if (isLarge) {
      width = '100%';
      imageHeight = '362px';
      fs = '32px';
      lh = '36px';
    }

    const styleBlock = {
      width: isRow ? '' : width,
      height: isLarge ? '100%' : height,
      flexDirection,
      marginBottom,
      marginLeft: isLarge ? '8px' : '0px'
    };

    return (
      <div className="newsBlock" style={styleBlock}>
        <div className="newsBlock__preview" style={{
          width,
          height: isRow ? 'auto' : imageHeight
        }}>
          <img src="#" alt="#"/>
          <CategoryBadge
            color={this.props.colorCategory}
            text={this.props.category}
          />
        </div>
        <div className="newsBlock__content" style={{width}}>
          <h3
            className="newsBlock__title"
            style={{lineHeight: lh, fontSize: fs}}
          >{this.props.title}</h3>
          <div className="newsBlock__author">
            От
            <a href="#"> Пользователя
              <span className="newsBlock__user">{' ' + this.props.author}</span>
            </a> -
            <span className="newsBlock__date"> 21 {!isLarge ? <br/> : ''} янв. 2021</span>
          </div>
        </div>
      </div>
    );
  }
}
export default NewsBlock;