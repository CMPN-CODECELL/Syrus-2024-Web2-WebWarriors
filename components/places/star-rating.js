import React from 'react';
import classes from './star-rating.module.css';

const StarRating = ({ rating }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <span key={i} className={classes.star}>
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return <div className={classes['star-rating']}>{renderStars()}</div>;
};

export default StarRating;
