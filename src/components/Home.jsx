import React from 'react'
import Header from './Header'
import './Home.css'
import { Text, Image, Box, Container, Heading,HStack} from '@chakra-ui/react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import 
    {
        faYoutube,
        faFacebook,
        faInstagram,
        faTwitter,
        faLinkedin,
        faGithub,
        faLinkedinIn,
        
    } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TimelineData from './TimelineData.json'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {ReactComponent as WorkIcon} from './icons/work.svg'
import {ReactComponent as SchoolIcon} from './icons/school.svg'
import Timeline from './Timeline';
import Footer from './Footer';


const Home = () => {
    let workIconStyles = { background: "#06D6A0"};
    let schoolIconStyles = {background: " #f9c74f"};
    useEffect(() => {
        Aos.init({duration: 1000});
    }
    , [])

  return (
    <div>
        <Header />
        <Container >
            <Box className='displayBox'>
                <Heading data-aos="fade-down"fontSize={"10rem"} color={"white"}  
                boxShadow={"0px 0px 15px 0px"} padding={"0.3em"} borderRadius={"15px"} fontWeight={"thin"} marginTop={"125px"} position={"relative"} top={"25px"}> 
                   <Text borderBottom={"10px solid"} borderRadius={"5px"}>
                    Portfolio
                   </Text>
                </Heading>
                <Text position={"relative"} bottom={"325px"} fontSize={"1.75rem"}>  
                    Built with React JS
                 </Text>
            </Box>
            <HStack backgroundColor={"#63c274"} spacing={200} padding={"125px"} id="Top">

                <Box data-aos="fade-right"className='Box' position={"relative"} left={"75px"}>
                    
                    <Heading className='Heading'>Who Am I?</Heading>

                    <Box className='Icons'>
                        <a href="https://www.youtube.com/channel/UCYkmta4mFzAvoRO7HJElrQQ" target={"_blank"}> <FontAwesomeIcon icon={faYoutube}  color='#eb3223' className='Icon'/> </a>
                        <a href="https://www.instagram.com/_lucasyu_/" target={"_blank"}> <FontAwesomeIcon icon={faInstagram} color="radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);" className='Icon'/> </a>
                        <a href="https://github.com/loafisgood" target={"_blank"}> <FontAwesomeIcon icon={faGithub}  color="black"className='Icon'/> </a>
                        <a href="https://twitter.com/luacslol" target={"_blank"}> <FontAwesomeIcon icon={faTwitter}  color="#49a1eb"className='Icon'/> </a>
                        <a href="https://www.linkedin.com/in/lucas-yu-678397218/" target={"_blank"}> <FontAwesomeIcon icon={faLinkedin}  color="#2867B2"className='Icon'/> </a>
                    </Box>

                    <Text className='Text'> My name is Lucas Yu and I am an aspiring web developer / 
                    software engineer interested in tech. I enjoy building websites and coding. 
                    I started my web development journey about 1 month ago and was intrigued by the 
                    creative process. I am currently learning React JS, Typescript, HTMl, JS, and CSS. </Text>          
                 
                </Box>
                <Image alt="img" position={"relative"} className={"frogimage"}max src='https://64.media.tumblr.com/75302698a444d3568b3388b0d7e9e562/0bac904f3167e940-47/s500x750/bde1b908b91adb4594906b3391795cdffa3a8f2f.pnj'/>
            </HStack>
            <HStack height={"100vh"} backgroundColor={"rgba(95, 176, 197, 0.912)"} width={"100%"} id={"Middle"}>
                <Image position={"absolute"} width={"25%"} height={"50%"}left={"125px"}src="https://cdn.shopify.com/s/files/1/1061/1924/files/Thinking_Face_Emoji.png?6135488989279264585" alt="img" ></Image>
                <Box data-aos="fade-left"className='Box' position={"relative"} left={"800px"} bottom={"12px"} marginTop={"0px"} > 
                    <Heading id={"#Middle"} className='Heading'>About Me</Heading>
                    <Text className='Text'> Aside from all the tech stuff, I am a diligent high school student (not really) with passion to pursue opportunities that come my way. I enjoy various hobbies such as video games, 
                    exercising, hanging out with friends, and listening to music. 
                    <br></br><br></br>
                    I also enjoy watching Youtube and Twitch. </Text>
      
                </Box>
                
            </HStack>  


            <Box className="timeline"id={"#Bottom"} >
                <Timeline/>

            
            </Box>

            <Footer />



            

    



            
        </Container>

    </div>
  )
}



export default Home; 
