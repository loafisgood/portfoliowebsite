
import { Heading, Text, Box, Container, VStack} from '@chakra-ui/react'
import Header from './Header'
import Footer from './Footer'
import './Contact.css'
import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react';
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

                <Heading as="h3" size="lg" fontWeight="normal" color="gray.500" className='ContactHeading' >
                    Contact Me
                </Heading>
                <Box position={"relative"} right={"20%"} >
                    <form
                      action="https://formspree.io/f/xvoljgde"
                      method="POST"
                      display="flex"
                      flexDirection="column"

                      

                    >
                      <VStack spacing={20}>

                        <label >
                          Your email:
                          <input type="email" name="email" id={"input"} placeholder={"Joe.Mama@gmail.com"}/>
                        </label>
                        <label >
                          Your message:
                          <textarea name="message" placeholder='Message'></textarea>
                        </label>

                        <button type="submit" id={"Submit"}>Send</button>


                        

                      
                      </VStack>
                    </form>
                  </Box>
                 
            </Box>
        </Container>

        <Footer/> 

    </div>
  )

  
}


export default Contact; 



