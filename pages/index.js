import { Fragment, useEffect } from 'react';

import PlacesSearch from '@/components/places/places-search';
import PlaceList from '@/components/places/place-list';
import { getPlaces } from '@/lib/db';

const dummy_places = [
  {
    title: 'Varanasi',
    location: 'Uttar Pradesh',
    rating: 4,
    image: 'varanasi.jpg',
    type: 'religious',
    temperature: 'temperate',
    budget: 'affordable',
    description:
      'One of the oldest continuously inhabited cities in the world, known for its spiritual significance and the ghats along the Ganges River.',
  },
  {
    title: 'Rishikesh',
    location: 'Uttarakhand',
    rating: 4,
    image: 'rishikesh.jpg',
    type: 'nature',
    temperature: 'temperate',
    budget: 'affordable',
    description:
      'A popular destination for yoga, meditation, and adventure sports like white-water rafting and trekking.',
  },
  {
    title: 'Jaipur',
    location: 'Rajasthan',
    rating: 4,
    image: 'rajasthan.jpg',
    type: 'monument',
    temperature: 'hot',
    budget: 'affordable',
    description:
      "Known as the 'Pink City' for its distinctive pink-colored buildings, famous for its forts, palaces, and vibrant markets.",
  },
];

function HomePage({ places }) {
  const findPlacesHandler = (type, temp) => {};

  useEffect(() => {
    for (let i = 0; i < 3; i++) {
      fetch('/api/add-place', {
        method: 'POST',
        body: JSON.stringify(dummy_places[i]),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  });

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
