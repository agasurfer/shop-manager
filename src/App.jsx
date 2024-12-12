import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './pages/HomePage';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';


const App = () => {
  return (
      <>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/add-product" element={ <AddProduct /> } />
         <Route path="/edit-product/:id" element={ <EditProduct /> } />
      </Routes>
      <ToastContainer />
      </>
  )
}

export default App