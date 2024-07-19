import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import Puja from './components/Puja';
import Panchang from './components/Panchang';
import Temples from './components/Temples';
import Library from './components/Library';
import PujaBooking from './components/PujaBooking';
import PujaDetail from './components/PujaDetail';
import ReviewBooking from './components/ReviewBooking';
import FillNameGotraAddress from './components/FillNameGotraAddress';
import MakePayment from './components/MakePayment';
import AddDetails from './components/AddDetails';

function App() {
  const contentStyle = {
    paddingTop: '56px', // Adjust this value based on your header's height
  };

  return (
    <Router>
      <Header />
      <div style={contentStyle}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/puja" element={<Puja />} />
          <Route path="/panchang" element={<Panchang />} />
          <Route path="/temples" element={<Temples />} />
          <Route path="/library" element={<Library />} />
          <Route path="/puja-booking" element={<PujaBooking />} />
          <Route path="/puja-detail" element={<PujaDetail />} />
          <Route path="/add-details" element={<AddDetails />} />
          <Route path="/review-booking" element={<ReviewBooking />} />
          <Route path="/fill-name-gotra-address" element={<FillNameGotraAddress />} />
          <Route path="/make-payment" element={<MakePayment />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
