import { getServerSession } from 'next-auth';
import { authOptions } from './[...nextauth]';

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  if (session) {
    res.send({ content: 'Welcome to the admin area.', session });
  } else {
    res.status(401).send({ error: 'Unauthorized' });
  }
}
