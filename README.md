# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Contact Management App

A responsive contact management application with advanced features.

## ✨ Key Features

- ➕ **Add new contacts** with validated forms
- ✏️ **Edit existing contacts**
- 🔍 **Advanced search** by name, last name, and email
- 🗑️ **Single contact deletion** with modal confirmation
- 🗑️🚫 **Bulk contact deletion** (multiple contacts)
- 📝 **Form management** using `react-hook-form`
- ✅ **Form validation** with `Yup`
- 💾 **Data persistence** with Local Storage
- ♻️ **State management** using Context API + useReducer
- 🧩 **Reusable components**

## 🛠️ Technologies Used

- React.js
- React Hook Form
- Yup (for validation)
- Context API + useReducer (state management)
- Local Storage (data persistence)
- useEffect
- useState
- uuid (for unique IDs)

## 🎮 How to Use

**Add a new contact:**

- Click on the "Add Contact" button
- Fill out the form (all fields are validated)
- Click "Save" to add the new contact

**Edit a contact:**

- Click the edit icon next to any contact
- Modify the information and save your changes

**Search contacts:**

- Use the search bar to find contacts by name, last name, or email

**Delete contacts:**

- Single deletion: Click the trash icon and confirm in the modal
- Bulk deletion: Select multiple contacts and click the bulk delete button
