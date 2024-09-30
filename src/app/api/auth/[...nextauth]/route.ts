import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import { sendRequest } from "@/app/utils/api"
import { redirect } from "next/navigation"

export const authOptions: any = {
  secret: process.env.NEXTAUTH_SECRET,
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: 'Panda Travel',
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {

        const res = await sendRequest({
          url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/login`,
          method: "POST",
          body: { email: credentials?.username, password: credentials?.password }
        });
        if (res.statusCode === 400) {

          throw new Error(res?.error as string);
        }
        if (res) {
          return res as any;
        } else {
          throw new Error(res?.error as string);
        }


      }
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    })
  ],
  callbacks: {
    //@ts-ignore
    async jwt({ token, user, account, trigger }) {

      if (trigger == 'signIn' && account?.provider !== "credentials") {

        const register = await sendRequest({
          url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/register`,
          method: "POST",
          body: { username: token.name, email: token.email, password: "kjfklsdjf4853457034#$#$#$*#(fkdjfkdjflkd", type: account?.provider?.toLocaleUpperCase() }
        });

        const login = await sendRequest({
          url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/login`,
          method: "POST",
          body: { email: token.email, password: "kjfklsdjf4853457034#$#$#$*#(fkdjfkdjflkd" }
        });
        if (login) {
          //@ts-ignore
          token.access_token = login.accessToken;
          //@ts-ignore
          token.refresh_token = login.refreshToken;
        }
      }
      if (trigger == 'signIn' && account?.provider === "credentials") {
        //console.log(user.user.email);
        //@ts-ignore
        token.access_token = user.accessToken;
        //@ts-ignore
        token.refresh_token = user.refreshToken;
        //@ts-ignore
        token.role_id = user.user.role_id;

      }
      return token;
    },
    //@ts-ignore
    session({ session, token, user }) {

      if (token) {
        session.access_token = token.access_token;
        session.refresh_token = token.refresh_token;
        session.user.role_id = token.role_id;

      }
      return session;
    }
  },

  // pages: { 
  //   signIn: "auth/signin" 
  //   } 
}


const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }