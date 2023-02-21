import Image from "next/image";
import React from "react";
import { Row, Text } from "src/app/components/";
import LogoPizza from 'public/assets/Logo.png'

export const NavBar = () => {



  return (
    <Row >
      <Image src={LogoPizza} alt={""} />
      <Text color='primary'>Inicio</Text>
      <Text></Text>
    </Row>
  );
};
