import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    `mongodb+srv://pankajgupta0695:Pankajtripfinder@cluster0.jyefuhl.mongodb.net/my-data?retryWrites=true&w=majority`
  );

  return client;
}

export async function insertPlace(client, place) {
  const db = client.db();
  const result = await db.collection('places').insertOne(place);

  return result;
}

export async function getPlaces() {
  const client = await connectToDatabase();
  const db = client.db();
  const placesCollection = await db.collection('places').find({}).toArray();
  const places = placesCollection.map(place => ({
    id: place.id,
    title: place.title,
    image: place.image,
    location: place.location,
    rating: place.rating,
  }));
  client.close();
  return places;
}

export async function getPlaceById(id) {
  const client = await connectToDatabase();
  const db = client.db();
  const place = await db.collection('places').findOne({ id: id });
  client.close();

  return place;
}

export async function getPlacePaths() {
  const client = await connectToDatabase();
  const db = client.db();
  const places = await db
    .collection('places')
    .find({}, { projection: { id: 1 } })
    .toArray();
  const placePaths = places.map(place => ({
    params: { placeId: place.id },
  }));
  client.close();

  return placePaths;
}
