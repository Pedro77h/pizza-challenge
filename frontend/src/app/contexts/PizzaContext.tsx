import { createContext, ReactNode, useContext, useReducer } from "react";

type usePizzaProps = {
  children: ReactNode;
};

type State = {
  currentPage: number;
};

type Action = {
  type: PizzaAction;
  payload: any;
};

type ContextType = {
  state: State;
  dispatch: (action: Action) => void;
};

const initialData: State = {
  currentPage: 0,
};

export enum PizzaAction {
  setCurrentPage,
}

const pizzaReducer = (state: State, action: Action) => {
  switch (action.type) {
    case PizzaAction.setCurrentPage:
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
};

const PizzaContext = createContext<ContextType | undefined>(undefined);

export const usePizza = () => {
  const context = useContext(PizzaContext);

  if (!context) throw new Error("usePizza must be used within a PizzaContext");

  return context;
};

export const PizzaProvider = ({ children }: usePizzaProps) => {
  const [state, dispatch] = useReducer(pizzaReducer, initialData);
  const value = { state, dispatch };

  return (
    <PizzaContext.Provider value={value}>{children}</PizzaContext.Provider>
  );
};
