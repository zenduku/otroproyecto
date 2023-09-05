import { Divider, Input } from "@chakra-ui/react";
import React from "react";
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

export const PostVenta = () => {

  const [activeTab, setActiveTab] = useState(0);
  const [modalsOpen, setModalsOpen] = useState([]);

  const handleOpenModal = () => {
    const updatedModalsOpen = [...modalsOpen];
    updatedModalsOpen[activeTab] = true;
    setModalsOpen(updatedModalsOpen);
  };

  const closeAndCleanModal = () => {
    handleCloseModal();
  };

  const handleCloseModal = () => {
    const updatedModalsOpen = [...modalsOpen];
    updatedModalsOpen[activeTab] = false;
    setModalsOpen(updatedModalsOpen);
  };

  //Metodos de Submit
  const [formData, setFormData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault(); // Previene que se recargue la página
    const {
      switcheSIM,
      inputDocumentoIdentidad,
      inputTelefonoCliente,
      totalSelectMount,
      inputNumeroOrden,
      inputPagoDolares,
      inputPagoBolivares,
      inputPagoDebito1,
      inputPagoDebito2,
      inputPagoPagomovil,
      inputReferenciaPagomovil,
      textareaObservacion,
    } = event.target.elements; // Obtiene los valores del formulario
    setFormData([
      ...formData, // Copia los elementos previos del array
      {
        registroCount: formData.length + 1,
        eSim: switcheSIM.value,
        cedula: inputDocumentoIdentidad.value,
        telefono: inputTelefonoCliente.value,
        recarga: totalSelectMount.value,
        orden: inputNumeroOrden.value,
        pagoDolares: inputPagoDolares.value,
        pagoBolivares: inputPagoBolivares.value,
        pagoDebito1: inputPagoDebito1.value,
        pagoDebito2: inputPagoDebito2.value,
        pagoMovil: inputPagoPagomovil.value,
        referenciaPM: inputReferenciaPagomovil.value,
        observacion: textareaObservacion.value,
      }, // Agrega el nuevo elemento al array con el campo "registroCount" asignado a la cantidad actual de elementos más 1
    ]);
    // Limpia los campos del formulario

    closeAndCleanModal();
  };

  const handleDeleteTd = (index) => {
    const newFormData = [...formData];
    newFormData.splice(index, 1);
    setFormData(newFormData);
  };

  return(

    <>
        <Box w="100%" h="100%" align="center" justify="center" m="2" p="2">
          <Heading
            as="h1"
            size="4xl"
            noOfLines={1}
            borderRadius="10"
            h="100%"
            p={4}
            m={4}
            bg="#900C3F"
            color="white"
          >
            Post-Venta
          </Heading>

          <Button onClick={handleOpenModal}>Nueva Entrada</Button>

          <Modal isOpen={modalsOpen[0]} onClose={closeAndCleanModal} size="5xl">
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Nueva PostVenta</ModalHeader>
              <ModalCloseButton />
              <form
                h="100%"
                alignItems="center"
                justifyContent="space-between"
                onSubmit={handleSubmit}
              >
                <ModalBody
                  boxShadow="lg"
                  border="1px"
                  borderColor="gray.200"
                  borderRadius="10"
                  h="100%"
                  p={4}
                  m={4}
                  templateRows="repeat(4, 1fr)"
                  templateColumns="repeat(2, 1fr)"
                  gap={4}
                >
                  <Heading
                    as="h4"
                    size="md"
                    mb={2}
                    borderBottom="2px"
                    borderColor="gray.400"
                  >
                    Formulario de Venta
                  </Heading>
                  <FormControl isRequired>
                    <FormLabel htmlFor="inputDocumentoIdentidad" isRequired>
                      Documento de Identidad
                    </FormLabel>
                    <Flex>
                      <Select mr={2} w="22%" mb={2}>
                        <option value="v">V</option>
                        <option value="e">E</option>
                        <option value="p">P</option>
                        <option value="j">J</option>
                      </Select>
                      <Input
                        id="inputDocumentoIdentidad"
                        placeholder="Ingrese los digitos del documento"
                        maxlength="10"
                        name="inputDocumentoIdentidad"
                      />
                    </Flex>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel htmlFor="inputTelefonoCliente">
                      Telefono del cliente
                    </FormLabel>

                    <NumberInput>
                      <NumberInputField
                        id="inputTelefonoCliente"
                        mb={2}
                        placeholder="Ingrese el numero asignado"
                        maxlength="11"
                        name="inputTelefonoCliente"
                      />
                    </NumberInput>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel htmlFor="inputNumeroOrden">
                      Numero de Orden
                    </FormLabel>
                    <Input
                      placeholder="Ingrese la orden asignada"
                      id="inputNumeroOrden"
                      mb={2}
                      maxlength="8"
                      name="inputNumeroOrden"
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel htmlFor="textareaObservacion" isRequired="false">
                      Observacion
                    </FormLabel>
                    <Textarea
                      id="textareaObservacion"
                      placeholder="Escriba una observacion si es necesario"
                      size="xs"
                      resize="none"
                      maxlength="250"
                      name="textareaObservacion"
                    />
                  </FormControl>
                </ModalBody>
                <ModalFooter mr={10}>
                  <Button
                    type="submit"
                    mr="2vw"
                    _hover={{ bg: "blue.200" }}
                    leftIcon={<TfiUpload />}
                  >
                    Enviar
                  </Button>
                  <Button
                    onClick={closeAndCleanModal}
                    _hover={{ bg: "red.300" }}
                    leftIcon={<TfiClose />}
                  >
                    Close
                  </Button>
                </ModalFooter>
              </form>
            </ModalContent>
          </Modal>

          <TableContainer>
            <Table variant="striped" colorScheme="messenger">
              <TableCaption>Imperial to metric conversion factors</TableCaption>
              <Thead>
                <Tr>
                  <Th>#</Th>
                  <Th>Cedula</Th>
                  <Th>Telefono</Th>
                  <Th>Orden</Th>
                  <Th>Observacion</Th>
                  <Th>Modificar / Eliminar</Th>
                </Tr>
              </Thead>
              <Tbody>
                {formData.map((data, index) => (
                  <Tr key={index}>
                    <Td>{data.registroCount}</Td>
                    <Td>{data.cedula}</Td>
                    <Td>{data.telefono}</Td>
                    <Td>{data.orden}</Td>
                    <Td>{data.observacion}</Td>
                    <Td>
                      <IconButton /> /
                      <IconButton
                        aria-label="Eliminar registro"
                        _hover={{ bg: "red.300" }}
                        icon={<TfiTrash />}
                        isRound="true"
                        size="sm"
                        onClick={() => handleDeleteTd(index)}
                      />
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
    </>

  )
};
