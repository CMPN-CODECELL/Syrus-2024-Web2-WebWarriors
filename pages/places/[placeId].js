import PlaceDetail from '@/components/places/place-detail';
import { getPlaceById, getPlacePaths } from '@/lib/db';

function PlaceDetailPage({ place }) {
  return <PlaceDetail place={place} />;
}

export async function getStaticProps(context) {
  const id = context.params.placeId;
  const place = await getPlaceById(id);

  return {
    props: {
      place: {
        title: place.title,
        image: place.image,
        location: place.location,
        description: place.description,
      },
    },
  };
}

export async function getStaticPaths() {
  const placePaths = await getPlacePaths();

  return { paths: placePaths, fallback: 'blocking' };
}

export default PlaceDetailPage;
