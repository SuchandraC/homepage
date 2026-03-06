import { Box, Text, Link, useColorModeValue } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.6} fontSize="sm" mt={8}>
      <Text>
        © {new Date().getFullYear()} Suchandra Chakraborty. All Rights Reserved.
      </Text>
      <Text mt={1}>
        Design inspired by{' '}
        <Link 
          href="https://www.craftz.dog/" 
          target="_blank"
          color={useColorModeValue('purple.500', 'pink.300')}
        >
          Takuya Matsuyama
        </Link>
      </Text>
    </Box>
  )
}

export default Footer
