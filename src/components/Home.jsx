import React from 'react'
import Header from './Header'
import './Home.css'
import { Text, Image, Box, Container, Heading, VStack, Badge, Stack, Avatar, Flex} from '@chakra-ui/react'
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
        faStaylinked
    } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Home = () => {
    useEffect(() => {
        Aos.init({duration: 1000});
    }
    , [])

  return (
    <div>
        <Header />
        <Container >
            <VStack backgroundColor={"#63c274"} spacing={300} marginBottom="175px">
                <Container position={"absolute"} maxWidth={"100%"} right={"250px"} bottom={"70px"} > 
                    <Image alt="img" position={"relative"} max src='https://64.media.tumblr.com/75302698a444d3568b3388b0d7e9e562/0bac904f3167e940-47/s500x750/bde1b908b91adb4594906b3391795cdffa3a8f2f.pnj'/>
                </Container>
                <Box data-aos="fade-right"className='Box' >
                    
                    <Heading className='Heading'>Who Am I?</Heading>

                    <Box className='Icons'>
                        <a href="https://www.youtube.com/channel/UCYkmta4mFzAvoRO7HJElrQQ" target={"_blank"}> <FontAwesomeIcon icon={faYoutube}  color='#eb3223' className='Icon'/> </a>
                        <a href="https://www.youtube.com/channel/UCYkmta4mFzAvoRO7HJElrQQ" target={"_blank"}> <FontAwesomeIcon icon={faInstagram} color="radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);" className='Icon'/> </a>
                        <a href="https://www.youtube.com/channel/UCYkmta4mFzAvoRO7HJElrQQ" target={"_blank"}> <FontAwesomeIcon icon={faGithub}  color="black"className='Icon'/> </a>
                        <a href="https://www.youtube.com/channel/UCYkmta4mFzAvoRO7HJElrQQ" target={"_blank"}> <FontAwesomeIcon icon={faTwitter}  color="#49a1eb"className='Icon'/> </a>
                        <a href="https://www.youtube.com/channel/UCYkmta4mFzAvoRO7HJElrQQ" target={"_blank"}> <FontAwesomeIcon icon={faLinkedin}  color="#2867B2"className='Icon'/> </a>
                    </Box>

                    <Text className='Text'> My name is Lucas Yu and I am an aspiring web developer / 
                    software engineer interested in tech. I enjoy building websites and coding. 
                    I started my web development journey about 1 month ago and was intrigued by the 
                    creative process. I am currently learning React JS, Typescript, HTMl, JS, and CSS. </Text>          

                </Box>  
            </VStack>
            <VStack>
                <Box data-aos="fade-right"className='Box'  >
                    <Heading className='Heading'>What I Do?</Heading>
                    <Text className='Text'>I am a web developer and I am currently working on a
                    full-stack web application. I am currently working on a project that
                    is a React application that is a simple todo list. I am also working on a
                    project that is a Node application that is a simple todo list.
                    </Text>
                </Box>
            </VStack>  



            <Container width={'auto'} height={'auto'} backgroundColor={"rgba(59, 33, 202, 0.346)"}> 
                <Box className='Card' rounded={'30px'} data-Aos="fade-up" >

                    <Heading className='CardHeading'>Hackathons Won and Participated in</Heading>
                    
                    <Text fontSize={"1.25em"} px={"0.5em"}> Hackathons Won: </Text>
                    <Stack direction={"column"} my={"-2em"} px={"1em"}>
                        <Badge variantColor="green" variant="subtle">
                            <Text fontSize="sm">
                                Best Design: LaunchHacks
                            </Text>
                            <Text>
                                Best Beginner: NHacks
                            </Text>
                        </Badge>
                    </Stack>



                </Box>
            </Container>
        </Container>

    </div>
  )
}



export default Home; 
