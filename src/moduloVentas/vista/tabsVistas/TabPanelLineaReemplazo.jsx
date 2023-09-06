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

export const TabPanelLineaReemplazo = () => {
  const closeAndCleanModal = () => {
    deshabilitarInputs();
    setSelects([{ id: Date.now() }]);
    setTotal(0);
    onClose();
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isChecked1, setIsChecked1] = useState(false);
  const handleCheck1 = () => {
    setIsChecked1(!isChecked1);
  };

  const [isChecked2, setIsChecked2] = useState(false);
  const handleCheck2 = () => {
    setIsChecked2(!isChecked2);
  };

  const [isChecked3, setIsChecked3] = useState(false);
  const handleCheck3 = () => {
    setIsChecked3(!isChecked3);
  };

  const [isChecked4, setIsChecked4] = useState(false);
  const handleCheck4 = () => {
    setIsChecked4(!isChecked4);
  };

  const [isChecked5, setIsChecked5] = useState(false);
  const handleCheck5 = () => {
    setIsChecked5(!isChecked5);
  };

  const [isChecked6, setIsChecked6] = useState(false);
  const handleCheck6 = () => {
    setIsChecked6(!isChecked6);
  };

  const [isCheckedSwitch, setIsCheckedSwitch] = useState(false);
  const handleCheckSwitch = () => {
    console.log(switchValue);
    setIsCheckedSwitch(!isCheckedSwitch);
    console.log(switchValue);
  };
  const switchValue = isCheckedSwitch ? "si" : "no";

  function deshabilitarInputs() {
    setIsChecked1(false);
    setIsChecked2(false);
    setIsChecked3(false);
    setIsChecked4(false);
    setIsChecked5(false);
    setIsChecked6(false);
    setIsCheckedSwitch(false);
  }

  //Metodos del Select
  const [selects, setSelects] = useState([{ id: Date.now(), monto: 0 }]);

  const handleAddSelect = () => {
    setSelects([...selects, { id: Date.now() }]);
  };

  const handleRemoveSelect = (id) => {
    const selectToDelete = selects.find((select) => select.id === id);
    const newTotal = total - selectToDelete.monto;
    setTotal(newTotal);
    setSelects(selects.filter((select) => select.id !== id));
  };

  const [total, setTotal] = useState(0);

  const handleMontoChange = (id, value) => {
    setSelects((prevSelects) => {
      const newSelects = prevSelects.map((select) => {
        if (select.id === id) {
          return { ...select, monto: parseInt(value) };
        }
        return select;
      });
      const newTotal = newSelects.reduce(
        (acc, select) => acc + select.monto,
        0
      );
      setTotal(newTotal);
      return newSelects;
    });
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

  const value0 = (value) => {
    if (value == 0) {
      return "N/A";
    } else {
      return value;
    }
  };

  return (
    <>
      <TabPanel>
        <p>Reemplazo de Linea</p>
        <Button onClick={onOpen}>Nueva Venta</Button>

        <Modal isOpen={isOpen} onClose={closeAndCleanModal} size="5xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Reemplazo de Linea</ModalHeader>
            <ModalCloseButton />
            <form
              h="100%"
              alignItems="center"
              justifyContent="space-between"
              onSubmit={handleSubmit}
            >
              <ModalBody>
                <Grid
                  boxShadow="lg"
                  border="1px"
                  borderColor="gray.200"
                  borderRadius="10"
                  h="100%"
                  p={4}
                  m={-2}
                  templateRows="repeat(4, 1fr)"
                  templateColumns="repeat(2, 1fr)"
                  gap={4}
                >
                  <GridItem rowSpan={6} colSpan={1}>
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

                    <FormControl>
                      <Flex>
                        <FormLabel htmlFor="switcheSIM">
                          Reemplazo con eSIM
                        </FormLabel>
                        <Switch
                          id="switcheSIM"
                          mr={2}
                          mt={0.5}
                          isChecked={isCheckedSwitch}
                          onChange={handleCheckSwitch}
                          value={switchValue}
                          name="switcheSIM"
                        />
                      </Flex>
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
                  </GridItem>

                  <GridItem rowSpan={6} colSpan={1}>
                    <Heading
                      as="h4"
                      size="md"
                      mb={2}
                      borderBottom="2px"
                      borderColor="gray.400"
                    >
                      Formulario de Pago
                    </Heading>
                    <FormControl>
                      <FormLabel htmlFor="checkboxGroupMetodoPago">
                        Metodo de Pago
                      </FormLabel>
                      <CheckboxGroup id="checkboxGroupMetodoPago">
                        <Checkbox
                          checked={isChecked1}
                          onChange={handleCheck1}
                          mr={2}
                        >
                          Dolares
                        </Checkbox>
                        <Checkbox
                          checked={isChecked2}
                          onChange={handleCheck2}
                          mr={2}
                        >
                          Bolivares
                        </Checkbox>
                        <Checkbox
                          checked={isChecked3}
                          onChange={handleCheck3}
                          mr={2}
                        >
                          Debito 1
                        </Checkbox>
                        <Checkbox
                          checked={isChecked4}
                          onChange={handleCheck4}
                          mr={2}
                        >
                          Debito 2
                        </Checkbox>
                        <Checkbox
                          checked={isChecked5}
                          onChange={handleCheck5}
                          mr={2}
                        >
                          Pago Movil
                        </Checkbox>
                      </CheckboxGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel htmlFor="inputPagoDolares">Dolares</FormLabel>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          color="gray.300"
                          children="$"
                        />
                        <Input
                          placeholder="Monto en Dolares"
                          id="inputPagoDolares"
                          disabled={!isChecked1}
                          type="number"
                          name="inputPagoDolares"
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel htmlFor="inputPagoBolivares">
                        Bolivares
                      </FormLabel>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          color="gray.300"
                          children="Bs."
                        />
                        <Input
                          placeholder="Monto en Bolivares Efectivo"
                          id="inputPagoBolivares"
                          disabled={!isChecked2}
                          type="number"
                          name="inputPagoBolivares"
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel htmlFor="inputPagoDebito1">Debito 1</FormLabel>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          color="gray.300"
                          children="Bs."
                        />
                        <Input
                          placeholder="Monto en Debito"
                          id="inputPagoDebito1"
                          disabled={!isChecked3}
                          type="number"
                          name="inputPagoDebito1"
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel htmlFor="inputPagoDebito2">Debito 2</FormLabel>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          color="gray.300"
                          children="Bs."
                        />
                        <Input
                          placeholder="Monto en Debito"
                          id="inputPagoDebito2"
                          disabled={!isChecked4}
                          type="number"
                          name="inputPagoDebito2"
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <Flex>
                        <FormLabel htmlFor="inputPagoPagomovil">
                          Pago movil
                        </FormLabel>
                        <Spacer />
                        <FormLabel htmlFor="inputReferenciaPagomovil">
                          Referencia Pago Movil
                        </FormLabel>
                      </Flex>
                      <Flex>
                        <InputGroup>
                          <InputLeftElement
                            pointerEvents="none"
                            color="gray.300"
                            children="Bs."
                          />
                          <Input
                            placeholder="Monto en Pago movil"
                            id="inputPagoPagomovil"
                            disabled={!isChecked5}
                            type="number"
                            name="inputPagoPagomovil"
                          />
                        </InputGroup>
                        <Input
                          placeholder="Nro. de Referencia"
                          id="inputReferenciaPagomovil"
                          disabled={!isChecked5}
                          ml={2}
                          w="80%"
                          type="number"
                          name="inputReferenciaPagomovil"
                        />
                      </Flex>
                    </FormControl>
                    <FormControl>
                      <FormLabel
                        htmlFor="textareaObservacion"
                        isRequired="false"
                      >
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
                  </GridItem>
                </Grid>
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
                <Th>eSim</Th>
                <Th>Cedula</Th>
                <Th>Telefono</Th>
                <Th>Orden</Th>
                <Th>Pago $</Th>
                <Th>Referencia PM</Th>
                <Th>Observacion</Th>
                <Th>Modificar / Eliminar</Th>
              </Tr>
            </Thead>
            <Tbody>
              {formData.map((data, index) => (
                <Tr key={index}>
                  <Td>{data.registroCount}</Td>
                  <Td>{data.eSim}</Td>
                  <Td>{data.cedula}</Td>
                  <Td>{data.telefono}</Td>
                  <Td>{data.orden}</Td>
                  <Td>
                    <Tr>Monto en Dolares: ${data.pagoDolares}</Tr>
                    <Tr>
                      Monto en Bolivares: Bs. {value0(data.pagoBolivares)}
                    </Tr>
                    <Tr>Monto en Debito1: Bs. {value0(data.pagoDebito1)}</Tr>
                    <Tr>Monto en Debito2: Bs. {value0(data.pagoDebito2)}</Tr>
                    <Tr>Monto en Pago Movil: Bs. {value0(data.pagoMovil)}</Tr>
                    <Tr>Referencia Pago Movil: {value0(data.referenciaPM)}</Tr>
                  </Td>
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
      </TabPanel>
    </>
  );
};
