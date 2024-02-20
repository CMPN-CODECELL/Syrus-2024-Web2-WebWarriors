import { Fragment } from 'react';

import PlacesSearch from '@/components/places/places-search';
import PlaceList from '@/components/places/place-list';
import { getPlaces } from '@/lib/db';

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
