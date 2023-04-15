import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "Zenduku/styles/Home.module.css";
import { Divider, Input } from "@chakra-ui/react";
import { BarraPrincipal } from "../containers/BarraPrincipal";
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
import { FaDollarSign } from "react-icons/fa";

export default function Home() {
  const [currentView, setCurrentView] = React.useState("Inicio");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

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

  function deshabilitarInputs() {
    setIsChecked1(false);
    setIsChecked2(false);
    setIsChecked3(false);
    setIsChecked4(false);
    setIsChecked5(false);
  }

  function closeAndCleanModal() {
    deshabilitarInputs();
    onClose();
  }

  return (
    <>
      <BarraPrincipal setCurrentView={setCurrentView} />

      {currentView === "Inicio" && (
        <Flex w="500px" h="500px" bg="blue">
          {" "}
        </Flex>
      )}

      {currentView === "Control de Caja" && (
        <Flex w="500px" h="500px" bg="yellow">
          {" "}
        </Flex>
      )}

      {currentView === "Ventas" && (
        <Flex w="100%" h="100%" align="center" justify="center" m="2" p="2">
          <Tabs isFitted variant="enclosed" align="center" w="100%">
            <TabList>
              <Tab>Linea Nueva</Tab>
              <Tab>Linea Reemplazo</Tab>
              <Tab>Servicio de Recarga</Tab>
              <Tab>Telefono / Accesorio</Tab>
            </TabList>
            <TabPanels h="100%">
              <TabPanel>
                <h1>Linea Nueva!</h1>
                <Button onClick={onOpen}>Trigger modal</Button>

                <Modal
                  onClose={closeAndCleanModal}
                  isOpen={isOpen}
                  isCentered
                  size="4xl"
                >
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Linea Nueva</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <form
                        h="100%"
                        p={3}
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Grid
                          border="1px"
                          borderColor="gray.200"
                          borderRadius="10"
                          h="100%"
                          p={3}
                          templateRows="repeat(4, 1fr)"
                          templateColumns="repeat(2, 1fr)"
                          gap={4}
                        >
                          <GridItem rowSpan={6} colSpan={1}>
                            <FormControl isRequired>
                              <FormLabel
                                htmlFor="inputDocumentoIdentidad"
                                isRequired
                              >
                                Documento de Identidad
                              </FormLabel>
                              <Flex>
                                <Select mr={2} w="22%" mb={2}>
                                  <option value="V">V</option>
                                  <option value="E">E</option>
                                  <option value="P">P</option>
                                  <option value="J">J</option>
                                </Select>
                                <Input
                                  id="inputDocumentoIdentidad"
                                  placeholder="Ingrese los digitos del documento"
                                  maxlength="10"
                                />
                              </Flex>
                            </FormControl>

                            <FormControl isRequired>
                              <FormLabel htmlFor="inputTelefonoCliente">
                                Telefono del cliente
                              </FormLabel>

                              <NumberInput max="04129999999" defaultValue="0412" >
                                <NumberInputField
                                  id="inputTelefonoCliente"
                                  mb={2}
                                  placeholder="Ingrese el numero asignado"
                                  maxlength="11"
                                />
                              </NumberInput>
                            </FormControl>

                            <FormControl>
                              <Flex>
                                <Switch id="switch-eSIM" mr={2} mt={0.5} />
                                <FormLabel htmlFor="switch-eSIM">
                                  Venta con eSIM
                                </FormLabel>
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
                              />
                            </FormControl>

                            <FormControl>
                              <FormLabel
                                htmlFor="textareaComentario"
                                isRequired="false"
                              >
                                Comentario
                              </FormLabel>
                              <Textarea
                                id="textareaComentario"
                                placeholder="Escriba un comentario si es necesario"
                                size="xs"
                                resize="none"
                                maxlength="250"
                              />
                            </FormControl>
                          </GridItem>

                          <GridItem rowSpan={6} colSpan={1}>
                            <FormControl isRequired>
                              <CheckboxGroup>
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
                              <FormLabel htmlFor="inputPagoDolares">
                                Dolares
                              </FormLabel>
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
                                />
                              </InputGroup>
                            </FormControl>

                            <FormControl isRequired>
                              <FormLabel htmlFor="inputPagoDebito1">
                                Debito 1
                              </FormLabel>
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
                                />
                              </InputGroup>
                            </FormControl>

                            <FormControl isRequired>
                              <FormLabel htmlFor="inputPagoDebito2">
                                Debito 2
                              </FormLabel>
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
                                  />
                                </InputGroup>
                                <Input
                                  placeholder="Nro. de Referencia"
                                  id="inputReferenciaPagomovil"
                                  disabled={!isChecked5}
                                  ml={2}
                                  w="80%"
                                  type="number"
                                />
                              </Flex>
                            </FormControl>
                          </GridItem>
                        </Grid>
                      </form>
                    </ModalBody>
                    <ModalFooter mr={10}>
                      <Button onClick={closeAndCleanModal}>Close</Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>

                <TableContainer>
                  <Table variant="striped" colorScheme="messenger">
                    <TableCaption>
                      Imperial to metric conversion factors
                    </TableCaption>
                    <Thead>
                      <Tr>
                        <Th>To convert</Th>
                        <Th>into</Th>
                        <Th isNumeric>multiply by</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>inches</Td>
                        <Td>millimetres (mm)</Td>
                        <Td isNumeric>25.4</Td>
                      </Tr>
                      <Tr>
                        <Td>feet</Td>
                        <Td>centimetres (cm)</Td>
                        <Td isNumeric>30.48</Td>
                      </Tr>
                      <Tr>
                        <Td>yards</Td>
                        <Td>metres (m)</Td>
                        <Td isNumeric>0.91444</Td>
                      </Tr>
                    </Tbody>
                    <Tfoot>
                      <Tr>
                        <Th>To convert</Th>
                        <Th>into</Th>
                        <Th isNumeric>multiply by</Th>
                      </Tr>
                    </Tfoot>
                  </Table>
                </TableContainer>
              </TabPanel>

              <TabPanel>
                <p>Linea Reemplazo!</p>
              </TabPanel>

              <TabPanel>
                <p>Servicio de Recarga!</p>
              </TabPanel>

              <TabPanel>
                <p>Telefono / Accesorio</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      )}

      {currentView === "Post-Venta" && (
        <Flex w="500px" h="500px" bg="red">
          {" "}
        </Flex>
      )}
    </>
  );
}
