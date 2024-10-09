import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import clientPromise from '../../../lib/mongodb';

// List of admin emails
const adminEmails = ['g22.noaman.imran@gnkhalsa.edu.in', 'noaman2540@gmail.com'];

export const authOptions = {
  // Secret for encrypting session
  secret: process.env.SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  // Use MongoDB adapter
  adapter: MongoDBAdapter(clientPromise),
  callbacks: {
    session: ({ session }) => {
      // Check if user is an admin
      if (adminEmails.includes(session?.user?.email)) {
        return session; // Allow admin users
      }
      return session; // Allow non-admin users as well
    },
  },
  // Enable debug logging for easier troubleshooting
  debug: true,
};

export default NextAuth(authOptions);

// Function to check if the request is from an admin
export async function isAdminRequest(req, res) {
  const session = await getServerSession(req, res, authOptions);
  if (!session || !adminEmails.includes(session?.user?.email)) {
    res.status(401).end(); // Unauthorized
    throw new Error('Not an admin');
  }
}


