import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: AuthOptions = {
  debug: true,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        const url = "/client/login";
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_PIXBALL_URL}${url}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: email,
              password: password,
            }),
          }
        );

        const user = await res.json();
        const userDetails = {
          ...user.client,
          ...user.tokens,
        };

        if (!res.ok) {
          throw new Error(user.message);
        }

        return userDetails;
      },
    }),
  ],

  callbacks: {
    async jwt({ user, token }) {
      return {
        ...user,
        ...token,
      };
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...token,
        },
      };
    },
  },

  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
