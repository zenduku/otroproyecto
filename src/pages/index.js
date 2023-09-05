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
import { ControCaja } from "Zenduku/vistas/controlCaja/ControlCaja";
import { Venta } from "Zenduku/vistas/venta/Venta";
import { PostVenta } from "Zenduku/vistas/postVenta/PostVenta";

export default function Home() {
  const [currentView, setCurrentView] = React.useState("Inicio");

  
  return (
    <>
      <BarraPrincipal setCurrentView={setCurrentView} />

      {currentView === "Inicio" && <Flex> </Flex>}

      {currentView === "Control de Caja" && (
        <ControCaja/>
      )}

      {currentView === "Ventas" && (
        <Venta/>
      )}

      {currentView === "Post-Venta" && (
        <PostVenta/>
      )}
    </>
  );
}
