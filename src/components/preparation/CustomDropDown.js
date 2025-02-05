import React, { useEffect, useState } from 'react'

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

const CustomDropDown = () => {
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [formData, setFormData] = useState({
    country: '',
    city: ''
  })

  console.log("country", country)
  console.log("city", city)
  const isSubmitDisabled = !country && !city;
  const selectedCountryData = countriesData.find((val) => val.country === country);
  console.log("selectedCountryData", selectedCountryData)

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ country: country, city: city })
  }

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
    setCity("");
  }

  console.log("formdata", formData)
  const { country: selectedCountry, city: selectedCity } = formData;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='country-dropdown'>Choose your country</label>
          <select id='country-dropdown' value={country} onChange={handleCountryChange}>
            <option value=''>select country</option>
            {countriesData?.map((value) => {
              const { country } = value;
              return <option value={country}>{country}</option>
            })}
          </select>
        </div>
        <div>
          <label htmlFor='state-dropdown'>Choose city</label>
          <select id='state-dropdown' value={city} disabled={!country} onChange={(e) => setCity(e.target.value)}>
            <option value=''>select city</option>
            {selectedCountryData?.cities?.map((value) => (
              <option value={value}>{value}</option>
            ))}
          </select>
        </div>
        <button type='submit' disabled={isSubmitDisabled}>submit</button>
      </form>
      {selectedCountry && selectedCity &&
        <div>
          <p>Selected Country : {selectedCountry}</p>
          <p>Selected City : {selectedCity}</p>
        </div>
      }
    </div>
  )
}

export default CustomDropDown