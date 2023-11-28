import { FC, useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './CTASection.css'
import { Box, Flex, chakra, Stack, Link } from '@chakra-ui/react'

interface CtaSectionProps {}

const CtaSection: FC<CtaSectionProps> = () => {
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
      <Flex
        bg="white"
        _dark={{
          bg: '#3e3e3e',
        }}
        p={50}
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          justify="center"
          bg="white"
          _dark={{
            bg: 'gray.800',
          }}
          w="full"
        >
          <Box
            w={{
              base: 'full',
              md: '75%',
              lg: '50%',
            }}
            px={4}
            py={20}
            textAlign={{
              base: 'left',
              md: 'center',
            }}
          >
            <chakra.span
              fontSize={{
                base: '3xl',
                sm: '4xl',
              }}
              fontWeight="extrabold"
              letterSpacing="tight"
              lineHeight="shorter"
              color="gray.900"
              _dark={{
                color: 'gray.100',
              }}
              mb={6}
            >
              <chakra.span display="block">
                Ready to elevate your productivity?
              </chakra.span>
              <chakra.span
                display="block"
                color="primary.500"
                _dark={{
                  color: 'gray.500',
                }}
              >
                Try IntelliSync Pro Today.
              </chakra.span>
            </chakra.span>
            <Stack
              justifyContent={{
                base: 'left',
                md: 'center',
              }}
              direction={{
                base: 'column',
                sm: 'row',
              }}
              spacing={2}
              mt={2}
            >
              <Box display="inline-flex" rounded="md" shadow="md">
                <Link
                  w="full"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  px={5}
                  py={3}
                  border="solid transparent"
                  fontWeight="bold"
                  rounded="md"
                  _light={{
                    color: 'white',
                  }}
                  bg="primary.500"
                  _dark={{
                    bg: 'primary.400',
                  }}
                  _hover={{
                    bg: 'primary.600',
                    _dark: {
                      bg: 'primary.500',
                    },
                  }}
                >
                  Get started
                </Link>
              </Box>
              <Box ml={3} display="inline-flex" rounded="md" shadow="md">
                <Link
                  w="full"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  px={5}
                  py={3}
                  border="solid transparent"
                  fontWeight="bold"
                  rounded="md"
                  color="primary.600"
                  bg="white"
                  _hover={{
                    bg: 'primary.50',
                  }}
                >
                  Learn more
                </Link>
              </Box>
            </Stack>
          </Box>
        </Flex>
      </Flex>
    </motion.div>
  )
}

export default CtaSection
