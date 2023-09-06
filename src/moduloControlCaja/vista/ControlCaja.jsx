import React from "react";
import { Divider, Input } from "@chakra-ui/react";
import { useState } from "react";
import {
  Flex,
  Square,
  Text,
  Button,
  Select,
  Spacer,
  Textarea,
  Switch,
  Checkbox,
  CheckboxGroup,
  IconButton,
  Box,
  Heading,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";
import {
  TfiPlus,
  TfiTrash,
  TfiSave,
  TfiUpload,
  TfiClose,
} from "react-icons/tfi";

export const ControCaja = () => {

    return(
        <>
            <Flex>
            <Box w="100%" h="100%" align="center" justify="center" m="2" p="2">
                <Heading
                as="h1"
                size="4xl"
                noOfLines={1}
                borderRadius="10"
                h="100%"
                p={4}
                m={4}
                colorScheme="green"
                bg="green.500"
                color="white"
                >
                Caja
                </Heading>

                <Grid
                boxShadow="lg"
                border="1px"
                borderColor="gray.200"
                borderRadius="10"
                h="100%"
                p={4}
                m={-2}
                templateRows="repeat(4, 1fr)"
                templateColumns="repeat(3, 1fr)"
                gap={4}
                >
                <GridItem rowSpan={6} colSpan={1}>
                    <Heading
                    as="h3"
                    size="lg"
                    noOfLines={1}
                    borderRadius="10"
                    p={2}
                    m={2}
                    colorScheme="green"
                    bg="green.500"
                    color="white"
                    >
                    Caja Chica
                    </Heading>
                </GridItem>
                <GridItem rowSpan={6} colSpan={1}>
                    <Heading
                    as="h3"
                    size="lg"
                    noOfLines={1}
                    borderRadius="10"
                    p={2}
                    m={2}
                    colorScheme="green"
                    bg="green.500"
                    color="white"
                    >
                    Flujo de Efectivo
                    </Heading>
                </GridItem>
                <GridItem rowSpan={6} colSpan={1}>
                    <Heading
                    as="h3"
                    size="lg"
                    noOfLines={1}
                    borderRadius="10"
                    p={2}
                    m={2}
                    colorScheme="green"
                    bg="green.500"
                    color="white"
                    >
                    Sim Card
                    </Heading>
                </GridItem>
                </Grid>
            </Box>
            </Flex>
        </>
        
    )

}