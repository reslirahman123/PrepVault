import React, { useContext } from "react";
import Select from "react-select";
import { AppContext } from "../context/ApplicationProvider";

const MultiSelectDropDown = ({ multiSelectDropDown, setMultiSelectedDropDown }) => {
  const { products, error, loading } = useContext(AppContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching products!</p>;

  // Format products for react-select
  const options = products.map((item) => ({
    value: item.title,
    label: item.title,
  }));

  const handleChange = (selectedOptions) => {
    setMultiSelectedDropDown(selectedOptions);
  };

  return (
    <div style={{ width: "300px", margin: "20px auto" }}>
      <label htmlFor="dropDown">Choose options</label>
      <Select
        id="dropDown"
        options={options}
        isMulti
        value={multiSelectDropDown}
        onChange={handleChange}
        placeholder="Select products..."
      />
    </div>
  );
};

export default MultiSelectDropDown