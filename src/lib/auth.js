import axios from "axios";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    //Manual Login
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials, req) {
        try {
          const url = `${process.env.NEXT_PUBLIC_PIXBALL_URL}/admin/login`;
          const user = await axios
            .post(
              url,
              {
                email: credentials.email,
                password: credentials.password,
              },
              {
                headers: {
                  "Content-Type": "application/json",
                },
              },
            )
            .then((data) => {
              return data.data;
            });
          console.log("users", user);
          const userDetails = {
            ...user.data,
            ...user.tokens,
          };
          console.log("userDetails", userDetails);
          return userDetails;
        } catch (error) {
          throw new Error(error.response.data.message);
        }
      },
    }),

    // Google SignIn
    GoogleProvider({
      clientId: process.env.GOOGLE_ID ?? "",
      clientSecret: process.env.GOOGLE_SECRET ?? "",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],

  callbacks: {
    async jwt({ user, token }) {
      return Promise.resolve({
        ...user,
        ...token,
      });
    },

    async session({ session, token }) {
      return Promise.resolve({
        ...session,
        ...token,
      });
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
