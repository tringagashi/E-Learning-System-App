import React from 'react'

import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia
} from '@mui/material'
import InfoIcon from '@mui/icons-material/Info';
import ApprovalIcon from '@mui/icons-material/Approval';
import MessageIcon from '@mui/icons-material/Message';

const myStyle = {
  backgroundColor: 'lightblue',
 
};


function Certificates() {
 return (
  <>
   <div style={myStyle}>

   <h5>Some certificates for those who successfully complete the training</h5>
   <Box sx = {{ display: 'flex', flexwrap: 'wrap', gap: '8px' }}>
    


       <Card>
 
           <CardMedia
                  component = 'img'
                  height = '200'
                  image = 'https://marketplace.canva.com/EAE7x9GYpRI/1/0/1600w/canva-dark-blue-and-gold-elegant-certificate-of-achievement-template-F4_x19w_DGw.jpg'
                  alt = 'unsplash image'
            >

        </CardMedia>

        <CardContent>

           <Typography gutterBottom variant = 'h5' component = 'div'>
              JAVA
           </Typography>


       </CardContent>
           

       </Card>
     

       <Card>
 
 <CardMedia
        component = 'img'
        height = '200'
        image = 'https://marketplace.canva.com/EAE6eU92K0c/1/0/1600w/canva-blue-and-gold-elegant-certificate-of-appreciation-template-oBDZqsK3jXk.jpg'
        alt = 'unsplash image'
  >

</CardMedia>

<CardContent>

 <Typography gutterBottom variant = 'h5' component = 'div'>
     PYTHON
 </Typography>

</CardContent>

</Card>

<Card>
 
           <CardMedia
                  component = 'img'
                  height = '200'
                  image = 'https://thumbs.dreamstime.com/b/elegant-futuristic-modern-certificate-template-texture-pattern-background-modern-certificate-template-169060793.jpg'
                  alt = 'unsplash image'
            >

        </CardMedia>

        <CardContent>

           <Typography gutterBottom variant = 'h5' component = 'div'>
              DATABASE
           </Typography>


       </CardContent>
           

         </Card>


         <Card>
 
           <CardMedia
                  component = 'img'
                  height = '200'
                  image = 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/certificate-design-template-for-achievement-193dce7dfd5302e5a96dc1d1bb9d7c0c_screen.jpg?ts=1636470438'
                  alt = 'unsplash image'
            >

        </CardMedia>

        <CardContent>

           <Typography gutterBottom variant = 'h5' component = 'div'>
           CSS
           </Typography>

          


       </CardContent>
           

         </Card>
         <Card>
 
           <CardMedia
                  component = 'img'
                  height = '200'
                  image = 'https://slidemodel.com/wp-content/uploads/21672-01-award-certificate-template-for-powerpoint-16x9-2.jpg'
                  alt = 'unsplash image'
            >

        </CardMedia>

        <CardContent>

           <Typography gutterBottom variant = 'h5' component = 'div'>
           HTML
           </Typography>

           

       </CardContent>

         </Card>
         
   </Box>
   <Button color = 'primary'>Top 5 Java Certifications for Developers
1.Oracle Certified Associate Java Programmer (OCAJP)
2.Oracle Certified Expert - Web Component Developer (OCEWCD) 
3.Oracle Certified Master Java Enterprise Architect (OCMJEA) 
4.VMware Spring Certificate. 
5.Oracle Certified Professional, Java SE 17.</Button>
   <div>
   <Button color = 'primary'>Top Python Certifications for Developers
1.PCEP - Certified Entry-Level Python Programmer.
2.PCAP - Certified Associate in Python Programming.
3.Introduction to Programming Using Python by Microsoft.
4.PCPP1 – Certified Professional in Python Programming </Button>
   </div>
   <div>
   <Button color = 'primary'>What is a certificate in database?
Database certifications allow professionals in the market to demonstrate their specialized knowledge of various vendor-specific and open source databases</Button>
   </div>
   <div>
   <Button color = 'primary'>CSS, or Cascading Style Sheets, is a fundamental programming language for web design, used to stylize the presentation of HTML-based pages. By using CSS, website designers can build multiple pages with the same formatting</Button>
   <Button color = 'primary'>What is HTML qualification?
HTML Certification allows you to demonstrate core programming skill that is highly desirable in an IT profession. This Online HTML Certification Exam is a professional credential designed to validate your proficiency in HTML skills.</Button>
   </div>
   <div>
    <InfoIcon />
   <Button color = 'primary'>More Info</Button>
   </div>
   <div>
    <ApprovalIcon />
    <Button color = 'primary'><p>
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSd3z-Otx9FtVBQ0lNFcS2WIeUgCkKscZUgxnLLiYzjMk0XclQ/viewform?fbzx=-2053339086985449193">Apply now</a>.
</p></Button>
   </div>
   <div>
    <MessageIcon />
    <Button color = 'primary'><p>
  <a href="https://about.coursera.org/contact/">Contact us for any question</a>.
</p></Button>
   </div>
   </div>
   </>
 )
}



export default Certificates