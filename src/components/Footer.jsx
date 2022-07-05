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
                Earl Haig Secondary School
               

              </Text>
            </VStack>
            <VStack className='VStack'>
              <Heading as="h3" size="lg" fontWeight="normal" color="gray.500" id={"Title"}>
                <Icon>
                  <BellIcon color={'gold'}/>
                </Icon>
                Contact
              </Heading>
              <Text className='FooterText'>
                School E-Mail: lucas.yu3@student.tdsb.on.ca

              </Text >
              <Text className='FooterText'>
                Personal E-Mail: lucas.loafisgood@gmail.com 
              </Text>
              <Text className='FooterText'>
                Phone: 416-731-6081
              </Text>
            </VStack>
            <VStack className='VStack'>
              <Heading as="h3" size="lg" fontWeight="normal" color="gray.500" id={"Title"}>

                <Icon>
                  <StarIcon color={'gold'}/>
                </Icon>

                Follow
              </Heading>
              
              <Link href="https://www.linkedin.com/in/lucas-yu-b9a8b917b/" target="_blank">
                LinkedIn
              </Link>
              <Link href="https://instagram.com/_lucasyu_" target="_blank"> Instagram</Link>
              <Link href="https://twitter.com/luacslol" target="_blank"> Twitter</Link>
              <Link href="
              https://www.facebook.com/lucas.yu.9" target="_blank"> Facebook</Link>


              
            </VStack>
          </HStack>
        </Box>


      </Container>



      
    </div>
  )
}


export default Footer; 
