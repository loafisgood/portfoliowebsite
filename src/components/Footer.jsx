import React from 'react'
import { Heading, Text, Box, Container } from '@chakra-ui/react'

export const Footer = () => {
  return (
    <div>

      <Container position={"absolute"} display={"flex"} alignContent="center" justifyContent={"center"}>
        <Box>
          <Heading as="h3" size="lg">
            Footer
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Text>
        </Box>
      </Container>



      
    </div>
  )
}


export default Footer; 
