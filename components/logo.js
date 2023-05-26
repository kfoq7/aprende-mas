import NextLink from 'next/link'
import NextImage from 'next/image'
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
    transform: rotate(20deg);
  }
`

export default function Logo() {
  return (
    <NextLink href="/" scroll={false}>
      <LogoBox>
        <NextImage src="/cerebro-logo.png" alt="logo" width={60} height={60} />
        <Text
          fontFamily="M Plus Rounded 1c, sans-serif"
          fontWeight="bold"
          ml={3}
          fontSize={22}
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
        >
          Aprende +
        </Text>
      </LogoBox>
    </NextLink>
  )
}
