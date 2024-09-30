
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Home() {

  const session = await getServerSession(authOptions);
  //console.log(session);
  if (!session) {
    // Nếu không có session, redirect về trang login
    redirect('/auth/signin');
  }

  return (
    <>
      <h1>fsdkfjsdlkfjsdlk</h1>

    </>
  );
}
