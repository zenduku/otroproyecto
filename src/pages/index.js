import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from 'Zenduku/styles/Home.module.css'
import { Divider, Input,  } from '@chakra-ui/react'
import {BarraPrincipal} from "../containers/BarraPrincipal";
import React from "react";
import { Flex, Square, Text, Button, Select, Spacer, Textarea, Switch} from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer} from '@chakra-ui/react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure} from '@chakra-ui/react'
import { FormControl, FormLabel, FormErrorMessage, FormHelperText} from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'

export default function Home() {

  const [currentView, setCurrentView] = React.useState("Inicio")
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
          <BarraPrincipal setCurrentView={setCurrentView}/>

          {currentView ==="Inicio" && <Flex  w="500px" h="500px" bg="blue" > </Flex>}

          {currentView ==="Control de Caja" && <Flex  w="500px" h="500px" bg="yellow" > </Flex>}

          {currentView ==="Ventas" &&
            <Flex w='100%' h='100%' align="center" justify="center" m='2' p='2'>
                <Tabs isFitted variant='enclosed' align='center' w='100%'>
                  <TabList>
                    <Tab>Linea Nueva</Tab>
                    <Tab>Linea Reemplazo</Tab>
                    <Tab>Servicio de Recarga</Tab>
                    <Tab>Telefono / Accesorio</Tab>
                  </TabList>
                  <TabPanels h='100%'>

                    <TabPanel>
                      <h1>Linea Nueva!</h1>
                      <Button onClick={onOpen}>Trigger modal</Button>

                      <Modal onClose={onClose} isOpen={isOpen} isCentered size='4xl'>
                        <ModalOverlay />
                        <ModalContent>
                          <ModalHeader>Modal Title</ModalHeader>
                          <ModalCloseButton />
                          <ModalBody>
                                <FormControl isRequired
                                  border='1px' borderColor='gray.200'
                                  borderRadius='10' h='100%' p={3} alignItems="center" justifyContent="space-between"
                                >
                                  <Grid
                                    templateRows='repeat(4, 1fr)'
                                    templateColumns='repeat(2, 1fr)'
                                    gap={4}
                                  >
                                    <GridItem rowSpan={4} colSpan={1}>
                                      <FormLabel htmlFor='inputDocumentoIdentidad'>Documento de Identidad</FormLabel>
                                      <Flex>
                                        <Select mr={2} w='22%' mb={2}>
                                          <option value='V'>V</option>
                                          <option value='E'>E</option>
                                          <option value='P'>P</option>
                                          <option value='J'>J</option>
                                        </Select>
                                        <Input id='inputDocumentoIdentidad' placeholder='Ingrese los digitos del documento'/>
                                      </Flex>
                                      <FormLabel htmlFor='inputTelefonoCliente'>Telefono del cliente</FormLabel>
                                      <Input id='inputTelefonoCliente' placeholder='ingrese los digitos del documento' mb={2}/>
                                      <Flex >
                                        <Switch id='switch-eSIM' mr={2} mt={0.5}/>
                                        <FormLabel htmlFor='switch-eSIM'>
                                          Venta con eSIM
                                        </FormLabel>
                                      </Flex>
                                      <FormLabel htmlFor='textareaComentario'>Comentario</FormLabel>
                                      <Textarea
                                        id='textareaComentario'
                                        placeholder='Here is a sample placeholder'
                                        size='xs'
                                        resize='none'
                                      />
                                    </GridItem>

                                    <GridItem rowSpan={4} colSpan={1}>
                                      <FormLabel htmlFor='inputFormaPago'>Forma de pago</FormLabel>
                                      <Input placeholder='Ingrese los digitos del documento' id='inputFormaPago'/>
                                    </GridItem>
                                  </Grid>
                                </FormControl>
                          </ModalBody>
                          <ModalFooter mr={10}>
                            <Button onClick={onClose}>Close</Button>
                          </ModalFooter>
                        </ModalContent>
                      </Modal>

                      <TableContainer>
                        <Table variant='striped' colorScheme='messenger'>
                          <TableCaption>Imperial to metric conversion factors</TableCaption>
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
          }

          {currentView ==="Post-Venta" && <Flex  w="500px" h="500px" bg="red" > </Flex>}
          
    </>
  )
}
