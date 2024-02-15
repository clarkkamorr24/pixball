import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      /** The user's postal address. */
      firstName: string;
      lastName: string;
      id: string;
      email: string;
    } & DefaultSession["user"];
  }
}
