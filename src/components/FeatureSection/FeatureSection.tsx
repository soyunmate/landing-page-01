import './FeatureSection.css'
import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  SimpleGrid,
} from '@chakra-ui/react'
import { FC, useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import FeatureCard from './FeatureCard/FeatureCard'
import { FaLock, FaSync, FaUsers } from 'react-icons/fa'

interface FeatureSectionProps {}

const FeatureSection: FC<FeatureSectionProps> = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start({ scale: 1, opacity: 1 })
      setHasAnimated(true)
    }
  }, [inView, controls, hasAnimated])

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      <Box id="features" bg={useColorModeValue('gray.50', 'gray.800')} p={4}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading
            color={'primary.400'}
            fontSize={{ base: '2xl', sm: '4xl' }}
            fontWeight={'bold'}
          >
            Key Features
          </Heading>
          <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
            Are you tired of juggling multiple devices and struggling to keep
            your data in sync? Say goodbye to the chaos with IntelliSync Pro –
            the ultimate solution for seamless data synchronization across all
            your devices. Whether you're a busy professional, a student, or a
            creative mind, IntelliSync Pro will transform the way you work.
          </Text>
        </Stack>

        <Container maxW="6xl" p={{ base: 5, md: 10 }} mt={5}>
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 3 }}
            placeItems="center"
            spacing={10}
            mb={4}
          >
            <FeatureCard
              heading="Cross-Platform"
              content="Works seamlessly on Windows, macOS, iOS, and Android."
              icon={FaUsers}
            />
            <FeatureCard
              heading="Real-Time Sync"
              content="Your data is updated instantly across all connected devices."
              icon={FaSync}
            />
            <FeatureCard
              heading="Secure and Private"
              content="We prioritize the security and privacy of your sensitive information."
              icon={FaLock}
            />
          </SimpleGrid>
        </Container>
      </Box>
    </motion.div>
  )
}

export default FeatureSection
