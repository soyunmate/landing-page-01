import { FC } from 'react'
import './NavBar.css'
import {
  Box,
  Flex,
  IconButton,
  Button,
  useColorModeValue,
  chakra,
  VStack,
  useDisclosure,
  VisuallyHidden,
  HStack,
  CloseButton,
} from '@chakra-ui/react'

import { FaChevronDown } from 'react-icons/fa'
//<img src="/logo.png" width={'35px'} />

interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => {
  const bg = useColorModeValue('white', 'gray.800')
  const mobileNav = useDisclosure()
  return (
    <>
      <chakra.header
        bg={bg}
        w="full"
        px={{
          base: 2,
          sm: 4,
        }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a
              href="/"
              title="Home Page"
              display="flex"
              alignItems="center"
            >
              <img src="/logo.png" width={'35px'} />
              <VisuallyHidden>IntelliSync</VisuallyHidden>
            </chakra.a>
            <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
              IntelliSync
            </chakra.h1>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="primary.500"
              display={{
                base: 'none',
                md: 'inline-flex',
              }}
            >
              <a href="#features">
                <Button variant="ghost">Features</Button>
              </a>
              <a href="#pricing">
                <Button variant="ghost">Pricing</Button>
              </a>
              <Button variant="ghost">Blog</Button>
              <Button variant="ghost">Docs</Button>
            </HStack>
            <Button variant="ghost" colorScheme="primary">
              Sign in
            </Button>
            <Button colorScheme="primary" size="sm">
              Get Started
            </Button>
            <Box
              display={{
                base: 'inline-flex',
                md: 'none',
              }}
            >
              <IconButton
                display={{
                  base: 'flex',
                  md: 'none',
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{
                  color: 'inherit',
                }}
                variant="ghost"
                icon={<FaChevronDown />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? 'flex' : 'none'}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />

                <Button w="full" variant="ghost">
                  Features
                </Button>
                <Button w="full" variant="ghost">
                  Pricing
                </Button>
                <Button w="full" variant="ghost">
                  Blog
                </Button>
                <Button w="full" variant="ghost">
                  Docs
                </Button>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </>
  )
}

export default NavBar
