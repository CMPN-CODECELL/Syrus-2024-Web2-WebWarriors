import { Fragment } from 'react';

import PlacesSearch from '@/components/places/places-search';
import PlaceList from '@/components/places/place-list';
import { getPlaces } from '@/lib/db';

/*
const places = [
  {
    id: 'p1',
    title: 'Taj Mahal',
    image: 'taj-mahal.jpg',
    location: 'Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh',
    rating: 5,
  },
];
*/
function HomePage({ places }) {
  const findPlacesHandler = (type, temp) => {};

  return (
    <Fragment>
      <PlacesSearch onSearch={findPlacesHandler} />
      <PlaceList items={places} />
    </Fragment>
  );
}

export const getStaticProps = async () => {
  const places = await getPlaces();

  return {
    props: {
      places,
    },
  };
};

export default HomePage;

// Pankajtripfinder
