import { FC, useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './TestimonialSection.css'
import { Avatar, Box, Stack, Text, useColorModeValue } from '@chakra-ui/react'
interface TestimonialSectionProps {}

const TestimonialSection: FC<TestimonialSectionProps> = () => {
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
      <Stack
        bg={useColorModeValue('gray.50', 'gray.800')}
        py={16}
        px={8}
        spacing={{ base: 8, md: 10 }}
        align={'center'}
        direction={'column'}
      >
        <Text
          fontSize={{ base: 'xl', md: '2xl' }}
          textAlign={'center'}
          maxW={'3xl'}
        >
          As a small business owner, staying organized is crucial. IntelliSync
          Pro has been a game-changer for our team, increasing our productivity
          and collaboration.
        </Text>
        <Box textAlign={'center'}>
          <Avatar
            src={
              'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
            }
            mb={2}
          />

          <Text fontWeight={600}>Sarah Doe</Text>
          <Text
            fontSize={'sm'}
            color={useColorModeValue('gray.400', 'gray.400')}
          >
            Vice President
          </Text>
        </Box>
      </Stack>
    </motion.div>
  )
}

export default TestimonialSection
