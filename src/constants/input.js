const getInputs = (register) => [
  {
    type: "text",
    name: "name",
    placeholder: "First Name",
    register: register("name"),
  },
  {
    type: "text",
    name: "lastName",
    placeholder: "Last Name",
    register: register("lastName"),
  },
  {
    type: "email",
    name: "email",
    placeholder: "Email",
    register: register("email"),
  },
  {
    type: "number",
    name: "phoneNumber",
    placeholder: "Phone Number",
    register: register("phoneNumber"),
  },
];

export default getInputs;
