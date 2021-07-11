import React from 'react';
import CategoryBadge from "../CategoryBadge/CategoryBadge";
import FromUsers from '../FromUsers/FromUsers';
import './NewsBlock.sass';

class NewsBlock extends React.Component {
  render() {
    let {
      isLarge = false,
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
    let borderRadius;
    
    if (isRow) {
      flexDirection = 'row';
      if (isReverse) borderRadius = '0 5px 5px 0';
      else borderRadius = '5px 0 0 5px';
    } else { 
      flexDirection = 'column';
      borderRadius = '5px 5px 0 0';
    }
    
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
          <img style={{borderRadius}} src="#" alt="#"/>
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
          <FromUsers
            name="1"
            isOneLine={isLarge}
            userLink="#"
          />
        </div>
      </div>
    );
  }
}
export default NewsBlock;