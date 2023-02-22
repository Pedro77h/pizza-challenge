import Image from "next/image";
import React from "react";
import LogoPizza from "public/assets/Logo.png";
import { usePizza } from "@/app/contexts/PizzaContext";
import { Row, Text , Input, Button } from "src/app/components/";

export const NavBar = () => {
  const { state } = usePizza();

  return (
    <Row padding="1.5rem" width="100%" justifyContent="space-evenly">
      <Image src={LogoPizza} alt={""} />
      <Text color={state.currentPage === 0 ? "primary" : "#111"}>Inicio</Text>
      <Text color={state.currentPage === 1 ? "primary" : "#111"}>Inicio</Text>
      <Text color={state.currentPage === 2 ? "primary" : "#111"}>Inicio</Text>
      <Row>
        <Input/>
        <Button></Button>
      </Row>
    </Row>
  );
};
