import { createContext, useReducer } from "react";
import Header from "./components/Header";
import Contacts from "./components/Contacts";
import ContactsList from "./components/ContactsList";

export const UserContext = createContext();

const initialState = {
  modalAddContact: false,
  contact: {},
  contacts: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "AddContact":
      return { ...state, modalAddContact: true };

    case "Cross":
      return { ...state, modalAddContact: false };

    case "NewContact":
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };

    case "Contacts":
      return {
        ...state,
        contacts: action.payload,
      };
    case "edite":
      return {
        ...state,
        contact: action.payload,
        modalAddContact: true,
      };
    case "updateContact":
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
        contact: {},
      };
    case "delete":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};

console.log("newContact");

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <Header />
      {state.modalAddContact && <Contacts />}
      <ContactsList />
    </UserContext.Provider>
  );
}

export default App;
