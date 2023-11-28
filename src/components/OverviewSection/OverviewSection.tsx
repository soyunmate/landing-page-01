import { FC, useEffect, useState } from 'react'
import './OverviewSection.css'
import {
  chakra,
  Container,
  Stack,
  HStack,
  VStack,
  Flex,
  Text,
  Image,
  Box,
} from '@chakra-ui/react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const overviewList = [
  {
    id: 1,
    label: 'Simply install the app',
    subLabel: 'The process should be quick.',
  },
  {
    id: 2,
    label: 'Connect your devices',
    subLabel: 'As many as you want!',
  },
  {
    id: 3,
    label: 'Let IntelliSync Pro do the rest',
    subLabel: 'No more manual updates or version control headaches.',
  },
  {
    id: 4,
    label: 'Focus on your work!',
    subLabel: 'Let us handle the synchronization.',
  },
]

interface OverviewSectionProps {}

const OverviewSection: FC<OverviewSectionProps> = () => {
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
      <Container maxW="6xl" py={10}>
        <chakra.h2
          color={'primary.400'}
          fontSize="4xl"
          fontWeight="bold"
          textAlign="center"
          mb={2}
        >
          How it works?
        </chakra.h2>
        <Text
          color={'gray.600'}
          fontSize={{ base: 'sm', sm: 'lg' }}
          align={'center'}
          justifyContent={'center'}
        >
          IntelliSync Pro uses cutting-edge technology to ensure that your
          documents, files,
          <br /> and notes are always up-to-date across your devices.
        </Text>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 0, md: 3 }}
          justifyContent="center"
          alignItems="center"
        >
          <VStack
            spacing={4}
            alignItems="flex-start"
            mb={{ base: 5, md: 0 }}
            maxW="md"
          >
            {overviewList.map((data) => (
              <Box key={data.id}>
                <HStack spacing={2}>
                  <Flex
                    fontWeight="bold"
                    boxShadow="md"
                    color="white"
                    bg="primary.400"
                    rounded="full"
                    justifyContent="center"
                    alignItems="center"
                    w={10}
                    h={10}
                  >
                    {data.id}
                  </Flex>
                  <Text fontSize="xl">{data.label}</Text>
                </HStack>
                <Text fontSize="md" color="gray.500" ml={12}>
                  {data.subLabel}
                </Text>
              </Box>
            ))}
          </VStack>
          <Image
            borderRadius="full"
            boxSize={{ base: 'auto', md: 'lg' }}
            objectFit="contain"
            src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            rounded="lg"
            //"/logo.png"
          />
        </Stack>
      </Container>
    </motion.div>
  )
}

export default OverviewSection
