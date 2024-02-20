import { connectToDatabase, insertPlace } from '@/lib/db';

async function handler(req, res) {
  if (req.method !== 'POST') return;

  const { title, image, location, description, type, temp, budget, rating } =
    req.body;

  const id = title.trim().toLowerCase().replaceAll(' ', '-');
  const newPlace = {
    id,
    title: title.trim(),
    image,
    location: location.trim(),
    description: description.trim(),
    type,
    temp,
    budget,
    rating,
  };

  const client = await connectToDatabase();
  await insertPlace(client, newPlace);
  res.status(201).json({ message: 'Added place.', place: newPlace });
  client.close();
}

export default handler;
