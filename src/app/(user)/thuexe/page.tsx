
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { sendRequest } from "@/app/utils/api";


export default async function Thuexe() {
    const session = await getServerSession(authOptions);



    // const res = await sendRequest({
    //   url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/register`,
    //   method: "POST",
    //   body:{username: "buivanvu13", email: "buivanvu123@gmail.com",password:"999999999"}
    // })

    return (
        <>
            <div>Thuê xe page</div>

        </>
    );
}
