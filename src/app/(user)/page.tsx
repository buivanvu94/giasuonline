
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { sendRequest } from "@/app/utils/api";
import { redirect } from "next/navigation";
import IntroHome from "@/components/home/intro.home";
import Homestaylist from "@/components/home/homestaylist.home"
import Hotellist from "@/components/home/hotellist.home"
import OtoList from "@/components/home/otochothue.home"
import XemayList from "@/components/home/xemaychothue.home"
export default async function Home() {

  // const session: any = await getServerSession(authOptions);
  // if (session.user.role_id == "admin") {
  //   redirect("/admin")
  // }


  // const res = await sendRequest({
  //   url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/register`,
  //   method: "POST",
  //   body:{username: "buivanvu13", email: "buivanvu123@gmail.com",password:"999999999"}
  // })

  return (
    <>
      <IntroHome />
      <Homestaylist />
      <Hotellist />
      <OtoList />
      <XemayList />
    </>
  );
}
