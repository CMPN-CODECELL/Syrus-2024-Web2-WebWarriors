import { Fragment, useState, useEffect } from 'react';

import PlacesSearch from '@/components/places/places-search';
import PlaceList from '@/components/places/place-list';
import { getPlaces } from '@/lib/db';

const initial_data = [
  {
    id: 'varanasi',
    title: 'Varanasi',
    image: 'varanasi.jpg',
    location: 'Uttar Pradesh',
    rating: 4,
    type: 'religious',
    temp: 'temperate',
    budget: 'affordable',
    description:
      'One of the oldest continuously inhabited cities in the world, known for its spiritual significance and the ghats along the Ganges River.',
  },
  {
    id: 'rishikesh',
    title: 'Rishikesh',
    image: 'rishikesh.jpg',
    location: 'Uttarakhand',
    rating: 4,
    type: 'adventure',
    temp: 'temperate',
    budget: 'affordable',
    description:
      'A popular destination for yoga, meditation, and adventure sports like white-water rafting and trekking.',
  },
  {
    id: 'jaipur',
    title: 'Jaipur',
    image: 'jaipur.jpg',
    location: 'Rajasthan',
    rating: 4,
    type: 'monument',
    temp: 'hot',
    budget: 'affordable',
    description:
      "Known as the 'Pink City' for its distinctive pink-colored buildings, famous for its forts, palaces, and vibrant markets.",
  },
];

function HomePage({ places }) {
  const [filteredPlaces, setFilteredPlaces] = useState(initial_data);
  const findPlacesHandler = (type, temp, budget) => {
    const updatedPlaces = places.filter(
      place =>
        place.type === type && place.temp === temp && place.budget === budget
    );
    setFilteredPlaces(updatedPlaces);
  };

  return (
    <Fragment>
      <PlacesSearch onSearch={findPlacesHandler} />
      {filteredPlaces.length === 0 ? (
        <p className='fallback'>Does not found any place with this filter!</p>
      ) : (
        <PlaceList items={filteredPlaces} />
      )}
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
