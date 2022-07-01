import React from 'react'
import { Heading, Text, Box, Container, HStack, Stack, VStack, Icon, Link} from '@chakra-ui/react'


import './Footer.css'
import {BellIcon, InfoIcon,StarIcon } from '@chakra-ui/icons'

export const Footer = () => {
  return (
    <div>
      
      <Container position={"absolute"}  className='Container'>
       
        <Box>
          <hr/>
          <HStack spacing={100}>
            <VStack className='VStack'>
              <Heading as="h3" size="lg" fontWeight="normal" color="gray.500" id={"Title"}>
                <Icon>
                  <InfoIcon color={"white"}/>
                </Icon>
                About
              </Heading>
              <Text className='FooterText'>
                Lucas Yu 

              

              </Text>
              <Text className='FooterText'>
               

              </Text>
            </VStack>
            <VStack className='VStack' >
              <Heading as="h3" size="lg" fontWeight="normal" color="gray.500" id={"Title"}>
                <Icon>
                  <BellIcon color={'gold'}/>
                </Icon>
                Contact
              </Heading>
              <Text className='LinkStyle'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            
              </Text>
            </VStack>
            <VStack className='VStack'>
              <Heading as="h3" size="lg" fontWeight="normal" color="gray.500" id={"Title"}>

                <Icon>
                  <StarIcon color={'gold'}/>
                </Icon>

                Follow
              </Heading>
              <Text className='FooterText'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </VStack>
          </HStack>
        </Box>


      </Container>



      
    </div>
  )
}


export default Footer; 
