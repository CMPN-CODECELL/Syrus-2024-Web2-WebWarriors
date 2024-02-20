import PlaceList from '@/components/places/place-list';
import { getPlaces } from '@/lib/db';

function Places({ places }) {
  return <PlaceList items={places} />;
}

export const getStaticProps = async () => {
  const places = await getPlaces();

  return {
    props: {
      places,
    },
  };
};

export default Places;
