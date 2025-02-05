import { useState } from "react";

const countriesData = [
  {
    country: "United States",
    value: "US",
    cities: ["New York", "Los Angeles"],
  },
  {
    country: "France",
    value: "FR",
    cities: ["Paris", "Lyon"],
  },
  {
    country: "Japan",
    value: "JP",
    cities: ["Tokyo", "Kyoto"],
  },
];

function CountryDropdown() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [formData, setFormData] = useState({ country: "", city: "" });

  const selectedCountryData = countriesData.find(
    (val) => val.value === selectedCountry
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedCountry && selectedCity) {
      setFormData({
        country: selectedCountry,
        city: selectedCity,
      });
    } 
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="country">Country:</label>
          <select
            id="country"
            value={selectedCountry}
            onChange={(e) => {
              setSelectedCountry(e.target.value);
              setSelectedCity("");
            }}
          >
            <option value="">Select Country</option>
            {countriesData.map((country) => (
              <option key={country.value} value={country.value}>
                {country.country}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <select
            id="city"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            disabled={!selectedCountry}
          >
            <option value="">Select City</option>
            {selectedCountryData?.cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" disabled={!selectedCountry && !selectedCity}>Submit</button>
      </form>
    </div>
  );
}

export default CountryDropdown;