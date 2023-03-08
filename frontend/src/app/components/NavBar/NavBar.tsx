import Image from "next/image";
import React from "react";
import LogoPizza from "public/assets/Logo.svg";
import Link from "next/link";

import { usePizza } from "@/app/contexts/PizzaContext";
import { Row, Text, Input, Button, SearchInput } from "src/app/components/";

export const NavBar = () => {
  const { state } = usePizza();

  return (
    <Row
      padding="1.5rem 2.5rem"
      width="100%"
      justifyContent="space-between"
      alignItems="center"
    >
      <Image src={LogoPizza} alt={""} width={150} />
      <Row justifyContent="space-between" width="28%">
        <Link href="/home">
          <Text
            color={state.currentPage === 0 ? "primary" : "#fff"}
            fontSize="1.2rem"
          >
            Inicio
          </Text>
        </Link>
        <Link href="/home">
          <Text
            color={state.currentPage === 1 ? "primary" : "#fff"}
            fontSize="1.2rem"
          >
            Pedidos
          </Text>
        </Link>
        <Link href="/home">
          <Text
            color={state.currentPage === 2 ? "primary" : "#fff"}
            fontSize="1.2rem"
          >
            Pizzas
          </Text>
        </Link>
      </Row>
      <Row width="30">
        <SearchInput />
        <Button>Buscar</Button>
      </Row>
    </Row>
  );
};
