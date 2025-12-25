import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (
          credentials.username === "avenger" &&
          credentials.password === "Marvel@123"
        ) {
          return { id: "1", name: "Avenger", }; // Return user object
        }
        throw new Error("Invalid credentials"); // Authentication failed
      },
    }),
  ],
});
