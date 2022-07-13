import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_AUTH_CLIENT_ID,
      clientSecret: process.env.NEXT_AUTH_CLIENT_SECRET,
    }),

    // ...add more providers here
  ],

  secret: process.env.NEXTAUTH_SECRET,
  secret: process.env.NEXT_AUTH_JWT_SECRET,

  pages: {
    signIn: "/auth/signin",
  },

  callbacks: {
    async session({ session, token, user }) {
      session.user.username = session.user.name
        .split("")
        .join("")
        .toLowerCase();
      // Sehaj Bindra to sehajbindra

      session.user.uid = token.sub;

      return session;
    },
  },
});
