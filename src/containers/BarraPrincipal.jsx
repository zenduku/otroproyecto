import React from "react";
import { Flex, Spacer, Box } from "@chakra-ui/react";
import { IconButton, Text, Button, Input } from "@chakra-ui/react";
import {
  TfiMenu,
  TfiHome,
  TfiMoney,
  TfiCommentsSmiley,
  TfiShoppingCart,
} from "react-icons/tfi";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { TfiPowerOff } from "react-icons/tfi";

export const BarraPrincipal = ({ setCurrentView }) => {
  const buttonText = ["Inicio", "Control de Caja", "Ventas", "Post-Venta"];
  const buttonIcon = [
    <TfiHome />,
    <TfiMoney />,
    <TfiShoppingCart />,
    <TfiCommentsSmiley />,
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const textClick = (e) => {
    console.log(e);
  };
  const cuandoLeDasClick = (cldc) => {
    console.log(cldc);
    setCurrentView(cldc);
  };

  return (
    <Flex bg="gray.900">
      <Box p="4">
        <IconButton
          colorScheme="gray"
          variant="solid"
          aria-label="Search database"
          icon={<TfiMenu />}
          ref={btnRef}
          onClick={onOpen}
        />
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
          size="xs"
        >
          <DrawerOverlay />
          <DrawerContent bg="gray.400">
            <DrawerCloseButton />
            <DrawerHeader>JB Celular Gestiones</DrawerHeader>

            <DrawerBody ps="0vw" pt="0.7vw" pb="0.7vw" pe="0vw">
              <Flex direction="column" w="100%">
                {buttonText.map((text, i) => (
                  <Button
                    leftIcon={buttonIcon[i]}
                    key={i.toString()}
                    variant="ghost"
                    size="lg"
                    colorScheme="telegram"
                    ml="0vw"
                    mb={2}
                    borderRadius="0"
                    onClick={(e) => cuandoLeDasClick(text)}
                  >
                    {text}
                  </Button>
                ))}
              </Flex>
            </DrawerBody>

            <DrawerFooter justifyContent="left">
              <Button
                bg="red.300"
                leftIcon={<TfiPowerOff />}
                variant="ghost"
                mr={3}
                onClick={onClose}
              >
                Cerrar Sesion
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
      <Spacer />
      <Flex
        textAlign="center"
        justify="center"
        align="center"
        mr="3vw"
        onClick={textClick}
      >
        <Text color="blue.400">JB</Text>
        <Text color="white" ml="0.5vw">
          Celular
        </Text>
      </Flex>
    </Flex>
  );
};
