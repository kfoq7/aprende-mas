import { Box, useColorModeValue } from '@chakra-ui/react'

export default function ProgressBar({ amount, total }) {
  return (
    <Box
      mb={5}
      p={2}
      borderRadius="lg"
      textAlign="center"
      bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
    >
      Your porgress: {amount + 1}/{total}
    </Box>
  )
}
