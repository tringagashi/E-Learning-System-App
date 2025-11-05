

import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia
} from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';


function  Aboutus() {
 return (

   
   <Box sx = {{ display: 'flex', flexwrap: 'wrap', gap: '16px' }}>


       <Card>
 
           <CardMedia
                  component = 'img'
                  height = '240'
                  image = 'https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp'
                  alt = 'unsplash image'
            >

        </CardMedia>

        <CardContent>

           <Typography gutterBottom variant = 'h5' component = 'div'>
           Sophia Martinez
           <div>A dedicated Java teacher with a strong background in software development. Sophia combines theory and practical examples to make Java programming accessible and engaging for her students. Her teaching style focuses on hands-on learning, fostering a deep understanding of Java concepts.</div>
           </Typography>

       </CardContent>

       </Card>
     

       <Card>
 
 <CardMedia
        component = 'img'
        height = '240'
        image = 'https://marketplace.canva.com/EAFXS8-cvyQ/1/0/1600w/canva-brown-and-light-brown%2C-circle-framed-instagram-profile-picture-2PE9qJLmPac.jpg'
        alt = 'unsplash image'
  >

</CardMedia>

<CardContent>

 <Typography gutterBottom variant = 'h5' component = 'div'>
 Ethan Rodriguez
 <div>Accomplished Python instructor adept at simplifying complex concepts for students. Ethan’s teaching style emphasizes practical applications, fostering a creative approach to Python programming.</div>
 </Typography>

</CardContent>

</Card>

<Card>
 
           <CardMedia
                  component = 'img'
                  height = '240'
                  image = 'https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png'
                  alt = 'unsplash image'
            >

        </CardMedia>

        <CardContent>

           <Typography gutterBottom variant = 'h5' component = 'div'>
           Lucas Anderson
           <div>Lucas Anderson, an experienced HTML teacher, excels at simplifying web development fundamentals. His teaching method merges theory with practical demonstrations, enabling students to grasp HTML essentials effectively.</div>
           </Typography>

           


       </CardContent>

         </Card>


         <Card>
 
           <CardMedia
                  component = 'img'
                  height = '240'
                  image = 'https://www.mockofun.com/wp-content/uploads/2019/12/circle-photo.jpg'
                  alt = 'unsplash image'
            >

        </CardMedia>

        <CardContent>

           <Typography gutterBottom variant = 'h5' component = 'div'>
           Isabella Garcia
           <div>Isabella Garcia, an adept database teacher, simplifies intricate concepts with practical examples. Her teaching style focuses on real-world applications, empowering students to comprehend database structures and queries effectively.</div>
           </Typography>

          


       </CardContent>

         </Card>
         
   </Box>
 )
}



 

export default Aboutus