
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { sendRequest } from "@/app/utils/api";
import SidebarCategories from "@/components/sidebar/sidebar.category"
import { Box } from "@mui/material";


export default async function Homestay() {
    const session = await getServerSession(authOptions);



    // const res = await sendRequest({
    //   url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/register`,
    //   method: "POST",
    //   body:{username: "buivanvu13", email: "buivanvu123@gmail.com",password:"999999999"}
    // })

    return (
        <Box sx={{
            display: "flex",
            p: "20px",
            gap: "20px"
        }}>

            <SidebarCategories />
            <div>Homestay page</div>



        </Box>
    );
}
