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
import { Grid, GridItem } from "@chakra-ui/react";
import { TabPanelLineaNueva } from "./tabsVistas/TabPanelLineaNueva";
import { TabPanelLineaReemplazo } from "./tabsVistas/TabPanelLineaReemplazo";
import { TabPanelServicioRecarga } from "./tabsVistas/TabPanelServicioRecarga";

export const Venta = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <Flex w="100%" h="100%" align="center" justify="center" m="2" p="2">
        <Tabs
          onChange={handleTabChange}
          isFitted
          variant="enclosed"
          align="center"
          w="100%"
        >
          <Heading
            as="h1"
            size="4xl"
            noOfLines={1}
            borderRadius="10"
            h="100%"
            p={4}
            m={4}
            colorScheme="blue"
            bg="blue.600"
            color="white"
          >
            Ventas
          </Heading>
          <TabList>
            <Tab>Linea Nueva</Tab>
            <Tab>Linea Reemplazo</Tab>
            <Tab>Servicio de Recarga</Tab>
          </TabList>
          <TabPanels h="100%">

            <TabPanelLineaNueva />
            <TabPanelLineaReemplazo />
            <TabPanelServicioRecarga />
            
          </TabPanels>
        </Tabs>
      </Flex>
    </>
  );
};
