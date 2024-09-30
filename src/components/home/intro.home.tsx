// import { Box, Button, Typography } from "@mui/material";
// import Image from "next/image";

// export default function IntroHome() {
//     return (
//         <Box
//             sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 // justifyContent: "space-between",
//                 padding: "20px",
//                 gap: "20px",
//                 maxWidth: "100%",
//                 margin: "0 0",
//             }}
//         >
//             {/* Cột hình ảnh */}
//             <Box sx={{ flex: 1 }}>
//                 <Image
//                     src="/image/introhome.jpg" // Đường dẫn hình ảnh
//                     alt="Beautiful Travel" // Mô tả ảnh
//                     width={900} // Chiều rộng ảnh
//                     height={500} // Chiều cao ảnh
//                     style={{ objectFit: "cover", borderRadius: "10px" }} // Bo tròn và căn chỉnh hình ảnh
//                 />
//             </Box>

//             {/* Cột nội dung */}
//             <Box
//                 sx={{
//                     flex: 1,
//                     display: "flex",
//                     flexDirection: "column",
//                     justifyContent: "center",
//                     alignItems: "flex-center",
//                     paddingLeft: "20px",
//                     width: "90%"
//                 }}
//             >
//                 <Typography
//                     variant="h4"
//                     sx={{ fontWeight: "bold", marginBottom: "20px" }}
//                 >
//                     Beautiful Travel
//                 </Typography>

//                 <Typography sx={{ fontSize: "1.2rem", marginBottom: "20px" }}>
//                     Discover amazing places around the world with our travel guide. Plan
//                     your next adventure with ease!
//                     Discover amazing places around the world with our travel guide. Plan
//                     your next adventure with ease!Discover amazing places around the world with our travel guide. Plan
//                     your next adventure with ease!Discover amazing places around the world with our travel guide. Plan
//                     your next adventure with ease!Discover amazing places around the world with our travel guide. Plan
//                     your next adventure with ease!Discover amazing places around the world with our travel guide. Plan
//                     your next adventure with ease!Discover amazing places around the world with our travel guide. Plan
//                     your next adventure with ease!
//                 </Typography>

//                 <Button variant="contained" sx={{ padding: "10px 20px" }}>
//                     Explore Now
//                 </Button>
//             </Box>
//         </Box>
//     );
// }

// components/Introduction.js
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

export default function Home() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" }, // Chuyển sang hàng dọc trên màn hình nhỏ
                alignItems: "center",
                justifyContent: "space-between",
                padding: "20px",
                gap: "20px",
                width: "100%", // Fullwidth
                maxWidth: "100%",
                margin: "0 auto",
            }}
        >
            {/* Cột hình ảnh */}
            <Box
                sx={{
                    flex: 1,
                    width: "100%", // Fullwidth cho hình ảnh
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Image
                    src="/image/introhome.jpg" // Đường dẫn hình ảnh
                    alt="Beautiful Travel" // Mô tả ảnh
                    width={600} // Chiều rộng ảnh
                    height={500} // Chiều cao ảnh
                    style={{ objectFit: "cover", borderRadius: "10px", width: "100%" }} // Fullwidth và bo tròn
                />
            </Box>

            {/* Cột nội dung */}
            <Box
                sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: { xs: "0", md: "20px" }, // Không padding trên màn hình nhỏ
                    width: "100%", // Fullwidth cho nội dung
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: "bold",
                        marginBottom: "20px",
                        textAlign: { xs: "center", md: "left" }, // Căn giữa trên màn hình nhỏ
                    }}
                >
                    Beautiful Travel
                </Typography>

                <Typography
                    sx={{
                        fontSize: "1.2rem",
                        marginBottom: "20px",
                        lineHeight: "1.6",
                        textAlign: { xs: "center", md: "left" }, // Căn giữa trên màn hình nhỏ
                    }}
                >
                    Discover amazing places around the world with our travel guide. Plan
                    your next adventure with ease!
                </Typography>

                <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" }, width: "100%" }}>
                    <Button variant="contained" sx={{ padding: "10px 20px" }}>
                        Explore Now
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
