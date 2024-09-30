import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Login from "@/components/auth/login";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";



const SignInPage = async () => {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/");
  }
    return (
      <>
      <Login/>
      </>
    );
}
  
export default SignInPage;