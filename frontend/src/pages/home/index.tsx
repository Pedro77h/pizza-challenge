import { NavBar } from "src/app/components";
import React, { useEffect } from "react";
import { PizzaAction, usePizza } from "@/app/contexts/PizzaContext";

const Home = () => {
  const { state, dispatch } = usePizza();

  useEffect(() => {
    dispatch({
      type: PizzaAction.setCurrentPage,
      payload: 0,
    });
  });

  return (
    <>
      <NavBar />
    </>
  );
};

export default Home;
