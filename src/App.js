import React, { createContext, useState } from 'react';
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
import Login from './components/Login/Login';
import Shipment from './components/Shipment/Shipment';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
export const UserContext = createContext();
function App() {
  const [LogedInUser, setLogedInUser] = useState({});
  return (
    <UserContext.Provider value={[LogedInUser, setLogedInUser]}>
      <Router>      
          <Header/>
          <h2>User Email: {LogedInUser.email}</h2>
        <Routes>
          <Route>
            <Route path="/" element={<Shop />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/review" element={<Review />} />
            <Route path="/inventory" element={
              <PrivateRoute>
                <Inventory />
              </PrivateRoute>
            } 
            />
            <Route path="/product/:productKey" element={<ProductDetails/>} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/shipment" element={
              <PrivateRoute>
                <Shipment/>
              </PrivateRoute>
            }
            />
            <Route path="*" element={<NotFound/>} />
          </Route>
        </Routes>
      </Router>
    </UserContext.Provider>
     
  );
}


export default App;
