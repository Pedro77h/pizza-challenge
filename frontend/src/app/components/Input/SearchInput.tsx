import React from "react";
import { BiSearch } from "react-icons/bi";
import { Row, Input } from "src/app/components/";

export const SearchInput = () => {
  return (
    <Row width="100%" border='2px solid black' background='rgba(0, 0, 0, 0.2)' borderRadius='5px' alignItems='center' mr='1.5rem'>
      <Input placeholder="PROCURAR PEDIDOS" />
      <BiSearch size={20}fill='rgba(255,255,255, 0.3)' />
    </Row>
  );
};
 