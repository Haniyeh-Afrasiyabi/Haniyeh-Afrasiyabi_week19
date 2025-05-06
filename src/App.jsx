import { createContext, useReducer, useState, useEffect } from "react";
import Header from "./components/Header";
import Contacts from "./components/Contacts";
import ContactsList from "./components/ContactsList";

export const UserContext = createContext();

const initialState = {
  modalAddContact: false,
  contact: {},
  contacts: [],
  selectedContacts: [],
  showDeleteModal: false,
  modalDeleteSingle: { show: false, id: null },
  confirmModal: { show: false, mode: null, data: null },
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
    case "ToggleSelect":
      return {
        ...state,
        selectedContacts: state.selectedContacts.includes(action.payload)
          ? state.selectedContacts.filter((id) => id !== action.payload)
          : [...state.selectedContacts, action.payload],
      };

    case "BulkDeleteContacts":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => !state.selectedContacts.includes(contact.id)
        ),
        selectedContacts: [],
      };
    case "ShowDeleteModal":
      return { ...state, showDeleteModal: true };

    case "HideDeleteModal":
      return { ...state, showDeleteModal: false };
    case "ShowDeleteSingleModal":
      return {
        ...state,
        modalDeleteSingle: { show: true, id: action.payload },
      };

    case "CloseDeleteSingleModal":
      return {
        ...state,
        modalDeleteSingle: { show: false, id: null },
      };
    case "DeleteContact":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
        modalDeleteSingle: { show: false, id: null },
      };
    case "ShowConfirmModal":
      return {
        ...state,
        confirmModal: {
          show: true,
          mode: action.payload.mode,
          data: action.payload.data,
        },
      };

    case "HideConfirmModal":
      return {
        ...state,
        confirmModal: { show: false, mode: null, data: null },
      };

    default:
      return state;
  }
};

console.log("newContact");

function App() {
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    contacts: JSON.parse(localStorage.getItem("contacts")) || [],
  });

  useEffect(() => {
    setFilteredContacts(state.contacts);
    localStorage.setItem("contacts", JSON.stringify(state.contacts));
  }, [state.contacts]);

  const searchHandler = (term) => {
    setSearchTerm(term);
    if (!term.trim()) {
      setFilteredContacts(state.contacts);
    } else {
      const filtered = state.contacts.filter(
        (contact) =>
          contact.name.toLowerCase().includes(term.toLowerCase()) ||
          contact.lastName.toLowerCase().includes(term.toLowerCase()) ||
          contact.email.toLowerCase().includes(term.toLowerCase()) ||
          contact.phoneNumber.includes(term.toLowerCase())
      );
      setFilteredContacts(filtered);
    }
  };

  return (
    <UserContext.Provider
      value={{ state, dispatch, searchHandler, searchTerm, filteredContacts }}
    >
      <Header />
      {state.modalAddContact && <Contacts />}
      <ContactsList />
    </UserContext.Provider>
  );
}

export default App;
