import { FC } from 'react'
import './FeatureCard.css'
import {
  Box,
  Flex,
  Icon,
  chakra,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react'

import { IconType } from 'react-icons'

interface FeatureCardProps {
  heading: string
  content: string
  icon: IconType
}

const FeatureCard: FC<FeatureCardProps> = ({ heading, content, icon }) => {
  return (
    <Box
      bg={useColorModeValue('gray.100', 'gray.700')}
      p={6}
      rounded="lg"
      textAlign="center"
      pos="relative"
    >
      <Flex
        p={2}
        w="max-content"
        color="white"
        bgGradient="linear(to-br, #228be6, #15aabf)"
        rounded="md"
        marginInline="auto"
        pos="absolute"
        left={0}
        right={0}
        top="-1.5rem"
        boxShadow="lg"
      >
        <Icon size={5} w={5} h={5} as={icon} />
      </Flex>
      <chakra.h3 fontWeight="semibold" fontSize="2xl" mt={6}>
        {heading}
      </chakra.h3>
      <Text fontSize="md" mt={4}>
        {content}
      </Text>
      <Link href="#" mt={4} fontSize="sm" color="blue.400">
        Learn more →
      </Link>
    </Box>
  )
}

export default FeatureCard
