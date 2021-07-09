import React from 'react';
import './categoryBadge.sass'

class CategoryBadge extends React.Component {
  render() {
    return (
      <div
        className="categoryBadge"
        style={{background: this.props.color}}>
        {this.props.text}
      </div>
    );
  }
}
export default CategoryBadge;