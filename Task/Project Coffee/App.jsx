import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Menu from './Menu';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import SignUp from './SignUp';
import SignIn from './SignIn';
import OrderPage from './OrderPage';
import PaymentPage from './PaymentPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/home' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/order/:id' element={<OrderPage />} />
        <Route path='/payment' element={<PaymentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
