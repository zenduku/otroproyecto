import React from "react";
import { Flex, Spacer, Box } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Input,
    Button
  } from '@chakra-ui/react'
  import { TfiPowerOff } from "react-icons/tfi";


export const BarraPrincipal = ( ) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

  return (
    <Flex bg="black">
        <Box p='4'>
            <IconButton
                colorScheme='gray'
                variant='solid'
                aria-label='Search database'
                icon={<HamburgerIcon />}
                ref={btnRef}
                onClick={onOpen}
            />
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
                size='xs'
                
            >
            <DrawerOverlay />
            <DrawerContent bg='gray.300'>
                <DrawerCloseButton />
                <DrawerHeader>JB Selular Gestiones</DrawerHeader>

                <DrawerBody>
                    <Input placeholder='Type here...' />
                </DrawerBody>

                <DrawerFooter justifyContent="left">
                    <Button colorScheme='red' leftIcon={<TfiPowerOff />} variant='ghost' mr={3} onClick={onClose}>
                    Cerrar Sesion
                    </Button>
                </DrawerFooter>
            </DrawerContent>
      </Drawer>
        </Box>
        <Spacer />
        <Box p='4' bg='green.400'>
            Box 2
        </Box>
    </Flex>
  )
}