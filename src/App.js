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

      <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
