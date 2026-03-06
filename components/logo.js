import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  
  > svg {
    transition: 200ms ease;
  }

  &:hover > svg {
    transform: rotate(-15deg);
  }
`

const Logo = () => {
  return (
    <Link href="/" scroll={false}>
      <LogoBox>
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
            fill={useColorModeValue('#202023', '#f0e7db')}
          />
        </svg>
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily="'M PLUS Rounded 1c', sans-serif"
          fontWeight="bold"
          ml={3}
        >
          Suchandra Chakraborty
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo