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


       
    </div>
  );
}

export default App;
