import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from 'Zenduku/styles/Home.module.css'
import { Divider } from '@chakra-ui/react'
import {BarraPrincipal} from "../containers/BarraPrincipal";
import React from "react";
import { Flex, Square, Text } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

export default function Home() {

  const [currentView, setCurrentView] = React.useState("Inicio")

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
