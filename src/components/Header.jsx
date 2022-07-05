import { Text, Container, Heading, Link} from '@chakra-ui/react'
import './Header.css'
import 
    {
        faYoutube,
        faFacebook,
        faInstagram,
        faTwitter,
        faLinkedin,
        faGithub
    } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Home from './Home'


const Header = () => {

    
  return (

    <div>
        <Container display="flex" justifyContent={"space-between"} backgroundColor={"#333"} 
        alignItems={"center"}  border={"1px solid white"} margin={-35} id={"Container"} boxShadow={"0px 1px 15px 0px white"}>
            
            <Heading  id="Heading" fontSize={"3.5rem"} color={"white"} display={"flex"} alignItems={"center"}  width={"100%"}  px={"1.2em"} py={"0px"}> 
                <Link>
                    Lucas Yu
                </Link>
                </Heading>

            <Text id="Text"  fontSize={"1.5em"} color={"white"}  height={"100%"} >
                <Link color={"white"} href='/' textDecoration={"none"} className={"LinkStyle"} id={"Link"}> 
                  Home 
                </Link>
            </Text>
            <Text id="Text" fontSize={"1.5em"} color={"white"}  height={"13%"}>
                <Link color={"white"} href='/Contact' textDecoration={"none"} className={"LinkStyle"} id={"Link"} >
                    Contact 
                </Link>
            </Text>
            <Text id="Text" fontSize={"1.5em"} color={"white"}  height={"13%"}>
                <Link color={"white"} href='#Bottom' textDecoration={"none"} className={"LinkStyle"} id={"Link"} >
                    Other
                </Link>
            </Text>
        </Container>

        

    </div>
  )
}


export default Header;
