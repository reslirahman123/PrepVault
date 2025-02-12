import { useRef, useState } from 'react';
import GreetUser from './components/preparation/GreetUser';
// import SearchBar from './components/debounce/SearchBar';
import FilterUsers from './components/debounce/FilterUsers';
import ApplicationProvider from './components/application/context/ApplicationProvider';
import Container from './components/application/pages/Container';
import DropDown from './components/application/pages/DropDown';
import MultiSelectDropDown from './components/application/pages/MultiSelectDropDown';
import CustomDropDown from './components/preparation/CustomDropDown';
import CountryDropdown from './components/preparation/CountryDropdown';
import User from './components/userCustomHook/User';
import PaginationExample from './components/preparation/PaginationExample';
import FormValidation from './components/preparation/FormValidation';
import { AuthProvider } from './components/login/context/AuthProvider';
import Login from './components/login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/login/Dashboard';
import Navbar from './components/login/Navbar';
import { CartProvider } from './components/fakestore-reducer/context/CartProvider';
import ProductList from './components/fakestore-reducer/ProductList';
import StoreNavbar from './components/fakestore-reducer/StoreNavbar';
import Cart from './components/fakestore-reducer/Cart';
import WindowDimensions from './components/learningconcept/WindowDimensions';
import ModalContainer from './components/modal/ModalContainer';


function App() {

  // const [selectedProduct, setSelectedProduct] = useState()
  const [selectedProduct, setSelectedProduct] = useState()
  const [multiSelectDropDown, setMultiSelectedDropDown] = useState()

  return (
    <div>
      {/* <ApplicationProvider>
          <DropDown selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} />
          <Container selectedProduct={selectedProduct} />
          <MultiSelectDropDown multiSelectDropDown={multiSelectDropDown} setMultiSelectedDropDown={setMultiSelectedDropDown} />
      </ApplicationProvider> */}
      {/* <FilterUsers /> */}
      {/* <CustomDropDown /> */}
      {/* <CountryDropdown /> */}
      {/* <User /> */}
      {/* <PaginationExample /> */}
      {/* <FormValidation /> */}

      {/* <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </AuthProvider> */}
{/* 
      <CartProvider>
        <Router>
          <StoreNavbar />
          <Routes>
            <Route path='/' element={<ProductList />} />
            <Route path='/cart' element={<Cart />}/>
            <Route />
          </Routes>
        </Router>
      </CartProvider> */}

      {/* <WindowDimensions /> */}
      <ModalContainer />
    </div>
  );
}

export default App;
