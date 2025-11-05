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



function Courses() {
 return (

   
   <Box sx = {{ display: 'flex', flexwrap: 'wrap', gap: '16px' }}>


       <Card>
 
           <CardMedia
                  component = 'img'
                  height = '240'
                  image = 'https://www.clariwell.in/resources/best-java-certification-course-top-training-institute-in-pune.webp'
                  alt = 'unsplash image'
            >

        </CardMedia>

        <CardContent>

           <Typography gutterBottom variant = 'h5' component = 'div'>
           Java Essentials
              {/* <div>Ready to dive into the world of Java programming? Join our dynamic course where you'll learn the essentials and beyond! From mastering syntax to conquering object-oriented programming, this course empowers you to build robust applications. Explore database connectivity, GUI development, and Java frameworks.
What You'll Learn:

Java basics and core concepts
Object-oriented programming (OOP)
Database integration and SQL
Graphical User Interface (GUI) development
Java frameworks and application development</div> */}
           </Typography>

           


       </CardContent>

       <CardActions>

          <Button size = 'small'>
          <PlayArrowIcon />
          <p>
<a href="https://www.youtube.com/watch?v=A74TOX803D0">Play</a>
</p>
          </Button>


       </CardActions>

       </Card>
     

       <Card>
 
 <CardMedia
        component = 'img'
        height = '240'
        image = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxATEhUSExIVFRUXEhcYGBYVFhYWFhUXFhUYGBYVFRUYHiggGBonGxcYITEhJSotLi4uGB8zODMsNygtLisBCgoKDg0OGxAQGy0lICYtLS8tLS0tLS0vLS0tLS0tLS0tLS0rLS0tLS0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAK4BIgMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQMEBQYCB//EAEkQAAIBAgQDBAUGCQwBBQAAAAECEQADBBIhMQVBUQYTImEycYGRoRRCUrHB8AcVFiNTcoKS0SQzNGJzg5OissLS4aNDRFRj8f/EABsBAAIDAQEBAAAAAAAAAAAAAAADAQIEBQYH/8QANREAAQMCAwUGBQMFAQAAAAAAAQACEQMhBBIxQVFhkaETcYGxwfAFIjLR8QYU4TNCUpLCcv/aAAwDAQACEQMRAD8A812tnzuD3KDP+oV1eWEXwATrmmSfKOXpD3Vxe9BB1DN72y/7K6xeXwgZ9F+fPwnlWvYVU6hPcN4ZdvZsgELGZiwAUGYnmduQNSLnAL6qzsEUKpbW4uoGsDXU9Bz2GtV9vDXGBZUdhsSFJHWJHqovYR09K2yzIGZSsxvBO8VVXEZTmB4H2L801S0lFCpKKKWkoVUtFFFCEUlFLUhCKSiioUJaSloqUJDRz9lLXIO9AQlJp62+Wy59f1VGdq2fZXs4hsriMWpNttbVmSpv6+m5Gq2Z57tsNJNDWuqENaJJQSGiSqLsj2NbEKMRiC1nDT4SB+dvkbrYB5DY3D4R5nSvR8ZxBnVbagW7SwFtqTlECAWJ1do+cfhTGJxDXGzMeQAAACqo0VVUaKoGwFM13sJgGUBmN3b93d99Vzq2JdUsLBFFFFblmRRRRQhFIaWkNCE21NtTjU01LcrJp6jvUh6jvSXK4TL1GuVJeo1ykOTAo1yo9ypFyo9ys7k0JqiiilK6i3l8arMAKgk7CQGJPtY0Yxpc+LNtqNBtJgeuaetoXvnKA3iaAdo1An4VFvNLMYA8R0Gw15eVYzp4rWdVJs8RvooRbrqsk5QxgE7kDly91NYnF3LkZ3Zo2kyBoBoNhsNulNqYYHTQg6gEadQdCNNjVjieNXX3FsQ4aAkCQQYidFkTAqiuHfKQTpoNk+irW0300n2da6a0wiVIkSJBEg8x1HnWh4fxHEusi/Yt5SB4sveEwBnCtOYajU9KcwfF8YAy/LrKw7CXKHMSQWILD0PGYj6MAQKU5zwJgcz6BIl7GdpVEDZF+kA9Fmxh3nLkaddMpkZfS08pE+uurmEuKoZrbqpMBipAJHQkVpbWPvG4GfiaAsMsoVdRHNwQEAhfS31AjWmLmFV3cXOIoVYK1wifEyuVQAAw0DUa8wYjxVQViD83/R9E1gDmyNqzVFXdzhuDWJxmadPBbnKTm8Z8UlBA21M02MBhcrEYoEhCwHdlcxCzlGY6GdPOnNcHaeUK7KDnGBHMKorqrK1hsJAz339EEhbZOpWSoJ6ERPmD1FW2H4Rw11VjijbJE5TctMVnWGMCGA0Om4pb67WXIPJJZ84kdbLLUVql4TwwHXFMRG4e1IIJ025iPVBpbXD+Gq5LXu8t5RClgrZuZzLpHlFL/dN3O/1Kv2ZWVoq/uvwzvCMl4KrEAowKuBqC2Y5gTqNPKmLl7Aa/m7uxgAxrGkknaa0tdmExCs2lIJzARv29ypTTU12xqz7LcDOLvZCxS0i571wD0LYMeGdC7HwqOZPQGpSlZ9jezq3f5ViFnDo0Im3ym6N0/sl+e3qUakxr8TiGuMXYyT7AANAqjkANAOVGIug5VRQltFCW7Y2tovor5nmTzJJ50zXocHhRRbJ+o6/bu8zwhcyvW7Q20RRRRWxIRRRRQhFFFBqQEKTgcBevHLats555RoPWdh7au7XYjGtvkT9Z/wDiDTvanHX8L3OAwcqzWwzMg8bsxIgHcHwkyNdtgKw/F7eJVymIz59yHLE685O4865zcRUq3YQAdJuSN+oU1XspEgtJI12AHdMFbK92ExgEg238lc/7lFZviXD71lsl22yHlI0Pmp2I9VU9m8yGUZlPVSVPvFbzstxFuIW7mCxJzuEL2rp1dSsCC3Pca7kZgaH1atMZnwRtgQQN+pFkUa1Os7IAWk6XkHhosa9R3p96YenuTGpl6jXKkvUa5WdyYFGuVHuVIuVHuVncmhNUUUUpXUTCKPESrNC/NB05yTI00plRtUiwwFt/HBPzYGvL1jc0wv2ViOgWraheZ8vv9dHL2/f66BtXR5ff77VVCnYTF2FSHw+dtZfvGEg7DLECOoqdYwxQ92+C8Rkw7RAZoAMiVjMo3B013qkgE6zl5kCYAjMQJAJHSR7KtHfD94YxF5kCqqtqDEMYMDYEJp1J6a0eJCKvzUTOyIjieEE+yp9uzcBn5DaRACXzlVEEEBndvQUGT4QPPYVNXDXSRHD8MeQWVOYMCAojbVWObkdyOdI7YOfFcxV0ZtAxAEGJYk6yJJgbkRpM07iGwEeC7jCR6M5Z3XyAEA3PfWSoydh5H7owzj2Yzfbzk9VcWcLfuT3eCwba+EShXXQhNAPCUIJYzMxNQL/ZzHX7jhrdoXLaoHgqpcsCc5jwltNTpy0qPfbhgkot9jyViFVtQIYrqBlzHrPSnrN3hTfziYoHXxZlJbUwXknWIGkfbTaTQLhpHeP5TzBsSmrnZLFKSG7sR0uBpPIeGYMSdeQPQ1TYqwbbsjFSVMEqwZfYw0NW+Ev8NFtQ9q+XlgxUgAqxaNM4khSo2A3mea3L/DYOWze5wC4DbEAZhpA0O3OOUnQCVUtYRa2u33+YVFNFFFWSEtcsaU1wxoQuHk6AEk6AASSToABzJr1LB8OGDsLhBHeSHxDDXNdiO7B5rbHhH9bOedZv8HnDxnfGuJXDkC0Ds2JcHIf2Fm568laQmul8MoZj2p2WHftPh59yy4qrAyDx+ySiiiu0sCKKKKEIooru1bLMFUSzMAB1JMAe+hC4qUmAv6Hun/cb+FXvFeLWuGxYsIlzE5QXuvqEkTlA325aaRM1SN+EDiX6VR+xb+0VjGKe/wCam22wkxPGADbv1UvdSpnK9xnbA08ZC0na+1jF4jbxOHsNcyW11Csymc4ZSR5N8azvaWxxLGXu9fB3FhAAq22gKCTqSNTLGuPy+4l+mX/Dt/wo/L7iX6Zf8O3/AArDSoVmZbNkCJk/ZRVxFCpmkvgmSIbE85WcxOHe2xR1ZGG6sCCJE6g+RrV/gs/pp/sn+tazPEcdcv3Gu3DLsRJgCYAA0GmwFab8Fn9N/un+tafiZOHdO5ZsJH7lsaSre72AQkzjbYMnTuxprt/OVQ9oeyGIwyd6GW9a5unzfNl5DzBPsrbY/wDnX/Xb7af4TdGbu2AKXAVZTsZEbfD214jDfq+ucSKVZoy5ss+MDZt0177L2FX4RTFPMw3heMvUa5Vtx7A9xiLtnklxgJ3y7qT+yRVVcr3BIIkLggQVFuVHuVIuVHuUhyaE1RRRSldNOGFldFhmmdc259kaVFHOnsUqgJCFTGpPztBqBPr+FMjb21ifqtIVjw7hD3kLh7aqGjxNBmAfREnadecGNjDfEeGtaAzNbMsVhXBYZeZXcDXemk4deZc4tOV5HKYM/R66jlRa4feZQy23IIkQpMjaY3iee1UmNSruLWsl1p0J09+KnntHiSACUgBYhFA8OxKjSeukaCq3F4l7jl3Ms25gCYAGwAGwFSk4LijtYuc/mwdBJOU6x57E6b6V03AsWBJw93n80mIiZA1G43qvaUxtHMIL3vaBcgaKvop3F4S5bbK6lTEidQRMSrDRhIIkHkaapgMqpEIqRgL4Rsxn0HAgA+JkZVJkjQEz7Kj0UIBhAoooqVCKKKDQoXJpm4adY1d9hMCLuNtlxNuyGxDg8xZEovtuG2vtqDwUzvW1TBfJrNnCc7STdjnfuQ1315fCn93XFdXLhYlmMkkknqSZJ99c16ilSFJgYNg/PPVcd787i7eiiiimKqKKKKEIq77GWQ+MtA7As37qkj4xVJV/2HuZcbb/AKwdf8hI+qk4mRRfH+J8kyj/AFG94WV7R4k3MVfc87rx6gxCj3AVW1N45ZKYi8h+bdce5zUexaLsqDdmCj1sYH10lsZR3DyXKqSXnfJ81J4XwnEYliti0zkbxAA9bGAPaauPyB4l+gH+Ja/5V6RCYOymHsgA5dTG/IuerEg1CPEb36RvfXkMf+rqWGrGm1hdHveOi9Lhv06KlMOe6D74FYVewPEiY7kDzNy3Hwatt2X7Opw9Gu3HD3nXKMuwG+VZ1MmCT5D29/jC/wDpG95pi5cZjLGT1muTi/1i6rSLabIJ3/kz3WldDDfAKVGoHkz77h6pHJJJO5P111ZaGU9CD7jXFSMBazXEXq3wGp+FeMpNc6o0DUkcybdV3nQAZ0hYn8KFsDHufpW7bH93L/trHXK1H4QcWLmPvEbKVT9xQG/zZqy9yvt9P+m3uHkvEvu896i3Kj3KkXKj3KW5WCaooopSuo2NZS3hcuI3IjmdBpTZttA8J9x+/Ku8YxNxs0SDBy7eHTT3UnhkDxculYnalaRon1xWIUZA90KBAEtAHMAchNLaxuIUZVe6ABEBnAgaD6h7qbwuICOLgElTmAdVdT61OhqbieMs5UlE8JkQnkwHOYGaR5gVUtB1Eqzmte05rxoIn+B6+CjrjcQGLC5dDEQTmeSASQJ6SSfaetdnimL1/PX9SSfG+pO861KPaF9+6szrvazTJnXMxnnvT1vtTeCgFbbER43SXmQc2bNuYAJpLgTfID4j7KtJxI+a3X7KjYOYkMYAAmTAGwHQDpR3TfRPuNXtztRcKZRbtq/K6qxcEGQVM6NPP4VT4vEC47ORBYzCKqqNI0A+53OtMYXGcwjxlWdGwz4Jnum+ifcaXum+ifcaTw9W+FdeHq3w/jTIVVz3TfRPuNKLTfRPuNAy9W+H8a68PVvh/GhQue6bofcaQ226H3V1K9W+H8aQkdW+/toQmXQ9D7q2/YPDFMJiLx3vXksrI+ZaHe3CPIs9ofs1iXYdWr0rhdnu8Dg7fW014+u/dZh/41t+6tGCZmxDeF+WnWErEGKZ5c11RRRXo1y0UUUUIRRRRQhFSMDiTauJcG6OreuDMe3ao9FBE2KJhW/4QODlnGOsgvZvKGYqJysBBzDkDA9sg1mOCn+UWf7VP9YrR8I47iMNItv4SZKMJWescj6quF7cYj9DY/db/lXPbQrMb2YAcNAZgxxEajftUuo0n1O0zEXkiJvwM7ei0naP+c/Y+2q/DWS7BBEn3VYdpP5wfqfaaqga+M/EyBj6hcJGa/dZe8oSaLe5XH4gufST4/wo/EFz6SfH+FQ+HYc3Xy5yN/hyFT+GWymIKZs0Lv7J+2t2Hw+FrZHftyGudlB7Qm/dCQ+pUbIziQJjKov4sH6az+9VZxbtFhsGh7q4t++RC5dUTzYjT2TJ8t685xKjM2nzj9dRnr3eF/S2Bw1QVACSNJn1J+64NX4rWqNy6Jq+5YlmMkkkk7kkySfbUa5T70xcruOWAKLcqPcqRcqPcrO5NCaooopSuq6u+fv+FcpuKVefqrAtSBsfv99qn8PuYYKe+S4zSIKkZcvMFZBnfWemm8wOXt+/10Ny9VClrspm3jdW2HtYfVms4goW8JAU+EZeZIGYnN1AkU7bXBjKe4xTKZBZoAy82QJuwldzHiOm1PPduApb+Xqyd0PEI8KnKmRS8MNDsYICnQaV1Zd7a/0+yFCiQgDsVC5SqgDxMAoEEgHTWkP8eqXXhlYZCcx1B+m+6J37TbnHGJsYQhHt4bF5ReXvCw8OQE57aMDo0FN9fVz7S3w/SbGNzLcHeABcigNDKfnAmV0MHWJ51OD30D3F4pZLFIIJUtpnKqBrA13Gvi2MCpNu7jVELxPCHMzMfzinVhJBzLAAIgAQBNY3PjR3Vw/5WwDeFSYy3gVU5cPiwsEd48KyvAyLHoamZnWBp5UjW2G6x6wRvWwx34wt3bf8us5mVgCjCAqjvZbwR4tIPORyp+/gMW6gHFYYqLgKGfn23BhoEAa5judBT6WIpsYMzvM+YUFjC1xNiBa2p3HcsTbssxhVYk7AAkmN4Arp8O4MMrAjkVII9hrX4fC8QdFIxmHKsQSq3SCQG2LKug05HY1fnH41FDXfkioYAYXGYgsQAAAmupjyml1MflIDYPiUhjCWjOIPAz1heYG20TBjrBj31yuHdhKoxExKqSAemgr1EXsUIY/JofLOW5m8UgR6OohtT5Cq97mJQtFuwpZi9zLd3JEAsMuv/VM/cV/8BzVsoPsLzXEIwkFSGA2gztO1eu8UtBHFobW7Nm2I2/N2UUx7QawWLx2LR1subZL5QDAYjO0Ak7zrXoHaEzib5/8Avf4ORXc+EgmoSd3mR9ljxwytA4qvooorurmoooooQiiiihCKKKKEIoNFFShei4DFLjbKspHfIoV0JgmPnDyJ19sVy2Au87bfuz8a8/tXGUhlYqRsVJBHqI2q1tdqccugvsf1grfFhNeL+J/o+jiqxrU35Z1HsH02TOq7WG+MupMDHNmFrLeBvE6I4PXb66dxWIXBW3vXWHeFSLaTJZj/ANxJ5CsTiO1GObQ4hx+qFX4qAapcRdZjmZixO5Ykk+snWqYD9H0cNVFV7y6Lxs8grV/jLqjS1rYlR2qO9SHqO9etcuQEy9RrlSXqNcrO5MCjXKj3KkXKj3KzuTQmqKKKUrqvX7KOXtFINj9/vtSnb2n7KwLSlPL786tbPGVW2E+TWdFgtEMxGzEmdf8Av1CrI19232VZY1cAF/NvdnlnAn0h6UaDQnYn0fOahOolzSXNIBG/0UTG4hbjZhbS2MoGW2CBpzMkyT18qj1bjD4HneuqdRGSSddD6IgkTp5Cn7OF4aZDYm7bgwC1stmgg58qjwggkZZkFfOqGqGjQ8kljjVnZ3iFRUsVcYfCYFmdWxLoO8hGKZgUAGrCAQST7lOmoqRb4Rw8kj8YCA4AJtMMy5RmgE7yTr5HSg1wNQ7/AFd6Aq/Zngs9FFWmGwmGdm/PlEAEG5lzMYJcBVO0iB6xU3C8Fwt1ZXGohBIbvQFkgKZQZpyyW1PSh1drRLp5FVZ8znAbLfjf4WWf0rqTAHITA5Cd46VqLfZSyxOXHWCF1b0ZiYkQ0AHlPWoPEeD2beVRiQ9xmUBQoygEgEs4JAjeqNxdJ5ygnkVJBaJJVJXJcjUEg1efk8eV+zqNDm0OonWNtd6dXssWBy4iyxUwQJIDRMBuYgjWpdiKYEk27j9kihiWVp7N0x3+qoOFn+UWJ/8AkWp/xFr1bjn9Jv8A9vc/1tXntzs3ftnMr2y6ENEmJEMNa9F7QrGKv/2rn3sT9tdX4PVY978pmw80vGgho7/RV1FFFd5c5O4YIXUOSEzDMRuFnxEecTWvxnAOG2rdu692/luAFCADoQCJASRoaxdeg8V4RcxGDwioyLltITnYrvbUaQDNYsW/I5hzloJIPI8Dt6LRQbmDrAnZzWf432eS3ZXE2Lve2SYkiGWTAJ666bAg1nq2fEcbZwmFTCq6XrneK7gappc7whvIkAR0k1zx6xav4FMVatJbZWhwihdzkYab+LKRPI1WhiHAAPkguIDtLbJFjdTUpNvl1AkjjtvwWOq4xnAzbwtrFd4CLjAZMsRIY+lOvo9OdXOLxNtMBZdsPaFx2UL4FkpbIJZjucwUT+vVnxHi4XA2b3cWmDOB3ZXwLo+qjkdPiaH4qoS3I3+4jUXifc8OIQ2iyDJ2TobT/GziqvsEbN1msXLFt4VnzuoZt0XLqNtZrJ4gAOw/rH661f4O3nFXDAE2mMDYTcQwPKpXCOMYZsR8lXDJ3bMy52hmYiTmcEazG06T7Kq6o6lVqOa0usCb6azqegCsGB9NgJi52ctFhqRjWkucDRuINh10t55MckyByB74Hsqdju0NnD32sJhbXco2VpWWaNGM+/eZjzrQcTJAptzEgO3WOnidySKUSXGLxvWJam3NbXtBg7WDxdt0tI6XFP5txKAyAxA6agj21O7T43DYK8pTC23uNbB1AVFUMQMoAPiJmT5Ck/u82XI0nMCRcDTWd0JnYROYxGuq82eo71vO32FstYw+Lt2xbN0DMAAJDJnExoSNRPnWEepp1RUZmiOHcYUOZkdCYeo1ypL1GuVRykKNcqPcqRcqPcrO5NCaooopSuq7l7fv9dKRsKQ7D78675+r7P8A8rAtKBv76s+zq3u9JtXLaMEMm4VgqSAQoIJJjprE6ioWAu21cG7b7xIIKhih15hhzG8bGp+Ix2FZT/JAGIMZbrKFYruABqA2oB0jSoTqIbOYmI2Xv0MeKn3TizfGY2iypvBgBnCEmNc0j3TyOsoDHLqy4S2ANbhgZABlzSSTIgHQEyAax4AoCDoKW6nmM+iRXHa4jtj1ubcZHkt7iRjjlW7ZwmbMgytHeXyNlzNIZiLR1O08o05v4vFgFn4dhoC+LRNFgMs6mQAAYHlWJu3WYksxYncsSSfWTXdvEOoIVmAKlYBMQdxHSkswbAPmAPdI9VqZVpz84McI9VpsNexNyC2Bs3GZVJfKqvcGWcz6wQRroBt5UXeE3yzOuAW4jOpUgpcVUUZSoy6a6mfMGsz8pufTfYD0m1A2G/mffVnhe0+MthVW7AVQoGVYAAgDbpV6jKuWGR1Hqsxe6rR7GvBEzaR1mescFpOGp6aX+HBVyrFsWkM75mzMQxJK7DaDUm9hMHlkcPur/ctM6H0QZI9lZb8q8XIJdSRMEqNJ3p4ds8ZuWUx1B/jWJ+FxDnZhA7nEJoeIieqt7+F4fdlEw15GDgStu5oQQSpBEayNOhpnjQwikIuCkknMFtsrZcuhDQIM9POoLdtMSQZW3q0mAQZMc58qrbfaDFKuQXTlgwpgxJmQd51q9HDVcwLzYaDNKnPfXzRjLmGAIFq6mmpYsW1EQWmvQeJ3hcZbo9G7YsXBpGj2UO3rmvM7/GLxDLmEMIMAait5we/3mAwb81S5YP8AdXWy/wDje3Xf+GHLXjeD6H0KR8Rc11MBmgPjfenaKKK9AuMnMNZZ3VF9JmCjlqxga+s1vu0nBL9zCYdFClrNsZ5YQMtsAwee1ee0kDoKRVoue5rmujLwnhvGxNZUDQQRM8Y9ClFbDsPcF23iMI50uIWXyJGViP8AKfYayeHthmVSwUFgCzbKCYzHyFbDhmFsYDvMQ1+3dfIVtrbMkk+U+QHkJpeNcDTLB9RiNdZEXiOZVsODmnZt7oVX20xStf7pPQsILajzAGb7B+zV0MC+K4bYSzDMriQSB6OcEeR8QPqrDu5JJJkkkk9SdSan8Fs22Z+8utbVbbNKkZnKkQgBIBJBOnlUVaGWmzKbsg6TOoNuMyhlSXmR9XGOvgtX2H4PetXrruFhVa2YafHNttPKKh8E4FfTHDMF8Jzt4h6L5gsdTPKo7cBwI7ktduKL6kqzKgVQPpknTeo9vhGDGGS/cuXQGcocqIQGAJJidV09dJjMXHN9QDfoPEWv/wCk3QAQLX+ruO7iFd8RnC8SXEXIFq6SoM7Du1UkjkAY9lRuL9kb13EtcQobNxs5fMPCG1bTnziPLas7xvhXye4EDB1ZFdWAiVaYkcjoanYrgWXBi8LhLQjva5Kl0kI3rMD41LWZAx7H3IDZy6jZabEaX26qpM5mubtJ1033hWPaK98txluzhyrC0u8wpIILweYAAHvp78InCL1y7buqBlhLWpg53uNAjp4hrWe4FwqxfS8bj3FNpDcIVVIKKNdz6U8qd4d2ZTEYV71lmN1GZe7KqA8Q0KRrOQj2yPOl5GUS2HQGQ27f8uM2nusrBzng2u6+u7hH5Wh7XcFunh9hIWbFtTc8WwS1DZeuteXPV/w/hWGfDX77M6vZy+FVUqe8OW3qTPpb9BXfEuE4S3hrGI7y6e+aIyJoqMBcO+++XrpMVNIdkCwkkyf7Yub7z+EP+f5rC2/ZpuCy71HuVrO2HZf5KqXbbm5acAEkAMjkZgrR1UyPUfKo/FuztrNhbeFe7cuYlVdRcVVARpgkqTBEEnfQVU1mOAINjPTfuR2bgSFkblMXK234h4X34wjYu+b2fuzcW2nycXJiIJzQG0mY86xuNtZHdJByuyyNjlYiR5GJpOcO08kzKQotFJRVVKgka+6nsEiM4Fx+7UzL5SwBIMSByJjXlMwa64erG8mRkVs8q1wqEBXUZswI5bEGdq0eKxmOV1BFhyWYiVkDu5J8LbqFAGo1EDWueSt9OmC1z3WDdsTzVVdwWDglcUw0JAa0xJMSqkKBBJ0J29lVVWrdmsXOlsHfZkUQNzBIgQZ2Gldfkzi8udbYdNTnW4hXKACGkkeEhgR1qna0xq4c0vtG1vmpgRw/Kp6WrNezuMIUjD3DmEwBqIOoYbq3ODrrULF4S5abJcUqd9diOqkaMN9RpoaltRjvpIKggjUJkUUV1TFVc11RSUIS0UlLUoSVyacikIoQmHFbT8HuIz4bFWOdu7bvr+q47m78e5NY1xVv2Gx62cbaLmLd3NYuHol4ZJP6rZG/Zop1OzqNfuPTb0lQ5udpbv8AfmttRXd60yMyMIZWKkdCDB+NcV6tcdFFFFCEUUUVKEUoFJSqSDI0I59KELSdp7LjDYKVYRaYGQfCSUgHoam8Na2mBsm9Z7y38qOacwCKQfHA3Hr0M1mMRxO+4yved16M7MNNtCaQ8Rv5O7718kRkztlgcssxFYxh3ZGsJ0JNpGpPI3T+1GcuG0Rs4dLK+43wy/ex/dsCysyhWVfCLPKCNNAT7fXVrhMThruJv2QL4N5DbIZVFtQiwhEeIaDSfpVj04tiQABfuAAQAHcADoNdBoPdTIx95XNxbtwOw1cOwY7btMnYe6quwz3MykizYGy8gz0HJWFZoMwbmTPKOpV92Zwl1RjUZGDDCXFjKdW6DrTXD7921w8XLYYMmOzgwYgWYYn+ruD7aqfxzigSRiLsnf8AOPr69ajfjK+ENsXrgQggoHbKQ05gVmNZM+updSeSSYuRv2CCPFDajQABOh6rVcVs2mwOLxVmAl/5OSnO3cW8O8X1SwPtPKKpu0Fh/wAW4EZGmb3zT8654ffy61RHEOEa2HYIxBZAxysREFl2J0Hupb3FsSQFOIvEKVKg3HIUqQVIE6EEAjpFJFFzSLzDp26ZcoH3P3VjUDtmojrJK1/FcetvGPh8SGGFxNm0jEggI4toFuqTpKmJ6aHlRiQMHxLhqXWWLeFFovsJPe21byBJHqmsLj+IX7sd7duXImO8dnid4zHTYVDxmJuXI7x2fKoVc7FsqjZROw8qznD2AnZB5RPLVM7W577ecK+HZhxxE2MRh8Q1t7xUNaBgh38N3PlIygGT012iqDtbhLNnFXbNkOEtsU8bBiWUkEyAND0p4docaqd2uKvhYiBdcQOg10HlVJdJJJJknUk7k9SaplfMuPvepkRYJmiloqFKY/F93Xw/Ff41J4bhra5u+sXHJjKVYQN5lZEnUazy2qgXHXOV1v3z/GnF4ne/St75rnStjflcHQLb7q/tWsPL57WIy6ZQoBg5D6RmPSIjyXzqwwhwbJ47uLsHLGVS7rE5QDK66eKBoJYdKzido8WAB3sgCACqRHuruz2mxSgAMumxyLI9R9p95pVRhdtPP+CrWDpG0ybacBw4LQYNsKJUY7E21GXICHABNuGYZRrqAsQumkka1UcTNnwG1duPC5ctwaoF0XKdsp1IUeiN65/K/EEybeHM7jutCSQZMHfSu07WNrOGsGTJgMPYNTHspbA5hmCfEfwgukQoE11NXuB4m9621xcBbfJ6bBsojKxJybeiOWsxvUziPDr1tRnwChnuKqst22VJObSOkCZO1aO0G1R2dpnwWWmkq1xiNaUtdwbIoiT4Y8RIU6HUEqYI6V18n9EnCXobLBCkg5/Rgg86tnCpkJ2Kppak4/KCEW1cVpjKyNJ8gOZqJbfN6IY+pSfqqcwKgtO5d0tcG8Bvp6wR7Na5F5T84VKiClcVGZdI60+7iNxXDEVUqQV6hhsd8pw9nFbsy93e/t7ICsT0zrkf9o0lV34Pbo7s4ZyAt8+AnZbwJ7o+QMlD+uOlWTKQSCIIMEHcEbg13/h1ftKWU6tt4bOlvBc7FU8j5Gh9lJRRRW9ZkUUUUIRRRRQhFFFFCEUhpaQ0ITbU01OtTTUtysmnqO9SHqO9JcrhMPTFypD1GuUhyYFGuVHuVIuVHuVncmhNUUUUpXWQy0ZaWiuOtyTLRr9zS0VCEZm6n30veN1NJRUyhPWsbdUEK7AHcAkA+sDepi9osYP/AHF06g6uTBBkETsZqtomiUKfi+OYm7pdus409Iz6M5fdJ99WGG7Y45EW2tzwKVIUqpjLEcttBVBRRKFqX7fY4lCWQlGzDwDcqVPwJqNwXtZewwYIq+J85J3kiCPVWfilyiiULQ8S7VvftC29tNLxuFlEFieR9mlLxXtHbvvbzWgttDORfnSZbWs7lFJlolC3qdrOGFsxwABjcAe01Dx/FuGNaYJYyPrl8p51jstdZKApn3dbDDcYwy4HIGPfCR5zOhHlEVs+D8XGOw4xP/rWytvEDTV48F+BstwDX+urdRXjWWrnsrxx8FiBeAzoQUu2zoLtpozpPI6Ag8iAeVacNiTQqZ9m3u93Sq1MVGwvUaKlcRwot3MgMghWUnQ5WUOuYfSjeOdRa9Y1wcARouKQQYKKKKKlQiiiihCKKKKEIpDS0hoQm2ppqdammpblZNPUd6kPUd6S5XCZeo1ypL1GuUhyYFGuVHuVIuUxcrO5NCZooopSuv/Z'
        alt = 'unsplash image'
  >

</CardMedia>

<CardContent>

 <Typography gutterBottom variant = 'h5' component = 'div'>
 Python Proficiency
     {/* <div>Ready to conquer the world of programming? Our Python course is your ticket to an exhilarating coding adventure! Dive into Python's dynamic ecosystem, mastering everything from basics to advanced concepts. Explore data analysis, machine learning, and web development. Get hands-on with projects, harnessing the power of Python to craft real-world applications. Join us, and elevate your coding prowess with Python's endless possibilities!
Skills You'll Gain:

Python fundamentals and syntax
Data analysis using Python libraries
Introduction to machine learning with Python
Web development using Python frameworks</div> */}
 </Typography>

</CardContent>

<CardActions>

          <Button size = 'small'>
          <PlayArrowIcon />
          <p>
<a href="https://www.youtube.com/watch?v=rfscVS0vtbw&t=2s">Play</a>
</p>
          </Button>
       </CardActions>

 

</Card>

<Card>
 
           <CardMedia
                  component = 'img'
                  height = '240'
                  image = 'https://cdn.hackr.io/uploads/posts/large/1675331763VOF13OpS4M.jpg'
                  alt = 'unsplash image'
            >

        </CardMedia>

        <CardContent>

           <Typography gutterBottom variant = 'h5' component = 'div'>
           Database Mastery
              {/* <div>Dive into the fascinating realm of databases! Our course is your gateway to mastering the core principles and tools behind effective data management. Explore database design, SQL querying, and database administration. Gain hands-on experience with real-world scenarios and projects. Discover how to optimize databases for efficiency and security. Join us, and unlock the power to manage, manipulate, and derive insights from data!

Skills You'll Gain:

Database design and modeling
Proficient SQL querying
Database administration essentials
Data optimization and security practices</div> */}
           </Typography>

           


       </CardContent>

       <CardActions>

          <Button size = 'small'>
          <PlayArrowIcon />
          <p>
<a href="https://www.youtube.com/watch?v=HXV3zeQKqGY">Play</a>
</p>
          </Button>

       </CardActions>

         </Card>


         <Card>
 
           <CardMedia
                  component = 'img'
                  height = '240'
                  image = 'https://elysiumacademy.org/wp-content/uploads/2018/12/css-html-1.jpg'
                  alt = 'unsplash image'
            >

        </CardMedia>

        <CardContent>

           <Typography gutterBottom variant = 'h5' component = 'div'>
           HTML Essentials
           {/* <div>Ready to shape the digital world? Our HTML course is your gateway to crafting stunning web experiences! Dive into the fundamentals of HTML, unraveling the secrets behind web page structures and layouts. Explore the art of creating responsive and user-friendly web content. Get hands-on with projects, mastering HTML's power to bring ideas to life. Join us to kickstart your journey in web development and create impactful digital spaces!
Skills You'll Gain:

HTML fundamentals and syntax
Creating responsive web layouts
Building user-friendly web content
Implementing multimedia in web pages
</div> */}
           </Typography>


       </CardContent>

       <CardActions>

          <Button size = 'small'>
          <PlayArrowIcon />
          <p>
<a href="https://www.youtube.com/watch?v=kUMe1FH4CHE">Play</a>
</p>
          </Button>
        
       </CardActions>

         </Card>
   </Box>
 )
}



export default Courses