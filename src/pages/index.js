import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from 'Zenduku/styles/Home.module.css'
import { Divider,  } from '@chakra-ui/react'
import {BarraPrincipal} from "../containers/BarraPrincipal";
import React from "react";
import { Flex, Square, Text, Button} from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer} from '@chakra-ui/react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure} from '@chakra-ui/react'

export default function Home() {

  const [currentView, setCurrentView] = React.useState("Inicio")
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
          <BarraPrincipal setCurrentView={setCurrentView}/>

          {currentView ==="Inicio" && <Flex  w="500px" h="500px" bg="grey" > </Flex>}

          {currentView ==="Control de Caja" && <Flex  w="500px" h="500px" bg="yellow" > </Flex>}

          {currentView ==="Ventas" &&
            <Flex w='100%' h='100%' align="center" justify="center">
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

                      <Modal onClose={onClose} isOpen={isOpen} isCentered>
                        <ModalOverlay />
                        <ModalContent>
                          <ModalHeader>Modal Title</ModalHeader>
                          <ModalCloseButton />
                          <ModalBody>
                            <Lorem count={2} />
                          </ModalBody>
                          <ModalFooter>
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
