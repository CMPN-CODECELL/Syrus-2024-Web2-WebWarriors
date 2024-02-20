import Button from '../ui/button';
import StarRating from './star-rating';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';
import classes from './place-item.module.css';

function PlaceItem({ title, image, location, rating, id }) {
  const exploreLink = `/places/${id}`;
  return (
    <li className={classes.item}>
      <img src={'/images/' + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.location}>
            <AddressIcon />
            <address>{location}</address>
          </div>
          <StarRating rating={rating} />
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Place</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default PlaceItem;
