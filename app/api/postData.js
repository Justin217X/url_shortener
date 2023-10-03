import { connectDatabase, disconnectDatabase, database } from '../api/mongodb';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { newData } = req.body;

    if (!newData) {
      return res
        .status(400)
        .json({ message: 'Bad Request - newData is required' });
    }

    await connectDatabase();

    await database.collection('URL_Shortener').insertOne({ data: newData });

    await disconnectDatabase();

    res.status(201).json({ message: 'Data inserted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
