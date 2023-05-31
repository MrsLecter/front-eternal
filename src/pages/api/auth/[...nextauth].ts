import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import {
  NEXT_PUBLIC_GOOGLE_CLIENT_ID,
  NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
  JWT_SECRET,
} from "@const/api-keys";

const GOOGLE_AUTHORIZATION_URL =
  "https://accounts.google.com/o/oauth2/v2/auth?" +
  new URLSearchParams({
    prompt: "consent",
    access_type: "offline",
    response_type: "code",
  });

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: NEXT_PUBLIC_GOOGLE_CLIENT_SECRET!,
      authorization: GOOGLE_AUTHORIZATION_URL,
    }),
  ],
  secret: JWT_SECRET,
  theme: {
    colorScheme: "dark", // "auto" | "dark" | "light"
    brandColor: "#004821", // Hex color code
    logo: "/_next/static/media/eternal-logo.c42d13c6.svg", // Absolute URL to image
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.tokenid = account.id_token;
      }
      return token;
    },

    async session({ session, token }) {
      if (session) {
        session = Object.assign({}, session, {
          token_id: token.tokenid,
        });
      }
      return session;
    },
  },
});
