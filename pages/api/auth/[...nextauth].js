import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";
import NextAuth, { getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const adminEmails = ["ayushjaswal4543@gmail.com"];
export const AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  callbacks: {
    session: ({ session, token, user }) => {
      return session;
    },
  },
};

export default NextAuth(AuthOptions);

export async function isAdminRequest(req, res){
  const session = await getServerSession(req, res, AuthOptions);
  if (!adminEmails.includes(session?.user?.email)){
    res.status(401);
    res.end();
    throw 'not an admin'
  }
}