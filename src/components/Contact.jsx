
import { Heading, Text, Box, Container, HStack, Stack, VStack, Icon, Link} from '@chakra-ui/react'
import Header from './Header'
import Footer from './Footer'
import './Contact.css'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input
  } from '@chakra-ui/react'


const Contact = () => {
  return (
    <div>
        <Header/>
        <Container className='Background'>
            <Box className='Contact'> 

                <Heading as="h3" size="lg" fontWeight="normal" color="gray.500" className='ContactHeading'>
                    Contact Me
                </Heading>
                <FormControl isRequired position={'absolute'} top={"160"} left={"75"} padding={'10px'}>
                    <FormLabel htmlFor='firstname'> First Name</FormLabel>
                    <Input id='first-name' placeholder='First Name' backgroundColor={"gray"} borderRadius={"10px"} fontSize={"25px"}/>
                    <FormErrorMessage>This field is required</FormErrorMessage>
                    <FormHelperText>Please enter your first name</FormHelperText>

                    
                </FormControl>



            </Box>
        </Container>

        <Footer/> 

    </div>
  )

  
}


export default Contact; 



