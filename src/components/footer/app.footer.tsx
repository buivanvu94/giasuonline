// // components/Footer.js
// import { Box, Typography, Link, Container, Grid } from '@mui/material';

// const Footer = () => {
//   return (
//     <Box
//       component="footer"
//       sx={{
//         backgroundColor: '#4C5C6C',
//         padding: '20px 0',
//         marginTop: 'auto',
//         "H6,p,a": {
//           color: "white"
//         }
//       }}
//     >
//       <Container maxWidth="lg">
//         <Grid container spacing={4}>
//           <Grid item xs={12} md={6}>
//             <Typography variant="h6" gutterBottom>
//               Giới thiệu
//             </Typography>
//             <Typography variant="body2" color="textSecondary">
//               Đây là phần giới thiệu ngắn về công ty của bạn. Bạn có thể thêm thông tin
//               về dịch vụ, sản phẩm hoặc thông điệp của doanh nghiệp.
//             </Typography>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Typography variant="h6" gutterBottom>
//               Liên kết nhanh
//             </Typography>
//             <Grid container spacing={2}>
//               <Grid item xs={6}>
//                 <Link href="#" variant="body2" color="textSecondary" underline="none">
//                   Link 1
//                 </Link>
//               </Grid>
//               <Grid item xs={6}>
//                 <Link href="#" variant="body2" color="textSecondary" underline="none">
//                   Link 2
//                 </Link>
//               </Grid>
//               <Grid item xs={6}>
//                 <Link href="#" variant="body2" color="textSecondary" underline="none">
//                   Link 3
//                 </Link>
//               </Grid>
//               <Grid item xs={6}>
//                 <Link href="#" variant="body2" color="textSecondary" underline="none">
//                   Link 4
//                 </Link>
//               </Grid>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default Footer;

'use client'

import React from 'react'
import { Box, Container, Grid, Typography, Link, TextField, Button } from '@mui/material'

export default function Footer() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted')
  }

  return (
    <Box component="footer" sx={{ bgcolor: '#2a9d8f', py: 6, color: 'white' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Introduction Column */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              We are a company dedicated to providing excellent services and products to our customers. Our mission is to make a positive impact in the world through innovation and sustainability.
            </Typography>
          </Grid>

          {/* Footer Menu Column */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box>
              {['Home', 'About', 'Services', 'Products', 'Contact'].map((text) => (
                <Link
                  key={text}
                  href="#"
                  color="inherit"
                  sx={{ display: 'block', mb: 1, '&:hover': { color: 'primary.main' } }}
                >
                  {text}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Contact Form Column */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                variant="outlined"
                size="small"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'white' },
                    '&:hover fieldset': { borderColor: 'white' },
                    '&.Mui-focused fieldset': { borderColor: 'white' },
                  },
                  '& .MuiInputLabel-root': { color: 'white' },
                  '& .MuiOutlinedInput-input': { color: 'white' },
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="message"
                label="Message"
                id="message"
                multiline
                rows={3}
                variant="outlined"
                size="small"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'white' },
                    '&:hover fieldset': { borderColor: 'white' },
                    '&.Mui-focused fieldset': { borderColor: 'white' },
                  },
                  '& .MuiInputLabel-root': { color: 'white' },
                  '& .MuiOutlinedInput-input': { color: 'white' },
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, bgcolor: 'white', color: '#4C5C6C', '&:hover': { bgcolor: '#e0e0e0' } }}
              >
                Send
              </Button>
            </Box>
          </Grid>

          {/* Map Column */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Find Us
            </Typography>
            <Box sx={{ width: '100%', height: '200px', overflow: 'hidden', borderRadius: '4px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0968023192!2d105.78010931476343!3d21.028811785998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4cd0c66f05%3A0xea31563511af2e54!2zSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1632929300784!5m2!1svi!2s"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </Box>
          </Grid>
        </Grid>
        <Typography variant="body2" align="center" sx={{ mt: 4 }}>
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </Typography>
      </Container>
    </Box>
  )
}