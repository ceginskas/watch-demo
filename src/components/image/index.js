import React from 'react';
import './styles.scss';

const Image = props => {
  return (
    <div className="image">
      {props.chosenProductImage && (
        <img alt="the watch" src={props.chosenProductImage} />
      )}
    </div>
  );
};
export default Image;
