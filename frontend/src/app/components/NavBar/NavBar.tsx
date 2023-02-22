import Image from "next/image";
import React from "react";
import LogoPizza from "public/assets/Logo.svg";
import Link from "next/link";

import { usePizza } from "@/app/contexts/PizzaContext";
import { Row, Text, Input, Button } from "src/app/components/";

import { BiSearchAlt2 } from "react-icons/bi";

export const NavBar = () => {
  const { state } = usePizza();

  return (
    <Row padding="1.5rem 1.2rem 1.5rem 2.5rem" width="100%" justifyContent="space-between">
      <Image src={LogoPizza} alt={""} width={150} />
      <Row justifyContent="space-between" width="28%">
        <Link href="/home">
          <Text
            color={state.currentPage === 0 ? "primary" : "#111"}
            fontSize="1.2rem"
          >
            Inicio
          </Text>
        </Link>
        <Link href="/home">
          <Text
            color={state.currentPage === 1 ? "primary" : "#111"}
            fontSize="1.2rem"
          >
            Pedidos
          </Text>
        </Link>
        <Link href="/home">
          <Text
            color={state.currentPage === 2 ? "primary" : "#111"}
            fontSize="1.2rem"
          >
            Pizzas
          </Text>
        </Link>
      </Row>
      <Row width='30'>
        <Input placeholder="PROCURAR PEDIDOS" mr={15} />
        <BiSearchAlt2/>
        <Button >Buscar</Button>
      </Row>
    </Row>
  );
};
