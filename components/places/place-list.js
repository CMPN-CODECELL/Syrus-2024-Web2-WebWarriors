import PlaceItem from './place-item';
import classes from './place-list.module.css';

function PlaceList({ items }) {
  return (
    <ul className={classes.list}>
      {items.map(place => (
        <PlaceItem
          key={place.id}
          id={place.id}
          title={place.title}
          location={place.location}
          image={place.image}
          rating={place.rating}
        />
      ))}
    </ul>
  );
}

export default PlaceList;
