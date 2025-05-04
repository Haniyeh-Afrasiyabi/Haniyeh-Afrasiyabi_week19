import { createContext, useReducer } from "react";
import Header from "./components/Header";
import Contacts from "./components/Contacts";


export const UserContext = createContext();

const initialState = {
  modalAddContact: false,
};

const reducer = (state, action) => {
  console.log({state,action});
  switch (action.type) {
    case "addContact":
      return { modalAddContact: true };
     case "cross":
      return{modalAddContact:false} 
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <Header />
      {state.modalAddContact && <Contacts />}
    </UserContext.Provider>
  );
}

export default App;
