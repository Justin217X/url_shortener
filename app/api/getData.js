import {
  NextApiRequest,
  NextApiResponse,
} from '@/node_modules/next/dist/shared/lib/utils';
import { connectDatabase, disconnectDatabase, database } from './mongodb';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    await connectDatabase();

    const data = await database.collection('Url_Shortener').find().toArray();

    await disconnectDatabase();

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
