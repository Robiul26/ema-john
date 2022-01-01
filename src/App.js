import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import TopHeadline from './components/TopHeadline/TopHeadline';

import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetails from './components/ProductDetails/ProductDetails';

function App() {


  return (
    <Router>      
      <Header/>
    <Routes>
      <Route>
        <Route path="/" element={<Shop />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/review" element={<Review />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/product/:productKey" element={<ProductDetails/>} />
        <Route path="*" element={<NotFound/>} />
      </Route>
    </Routes>
  </Router>
     
  );
}


export default App;
