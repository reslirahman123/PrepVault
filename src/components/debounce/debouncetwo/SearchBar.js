import React, { useState } from 'react'
import useDebounceWithFetchingData from '../useDebounceWithFetchingData'

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const { data, error, loading } = useDebounceWithFetchingData(`https://jsonplaceholder.typicode.com/users?name_like=${inputValue}`, inputValue)


  console.log("first", data)
  console.log("inputValue", inputValue)

  return (
    <div>
      <div>
        <label htmlFor='searchBar'>Search Bar: </label>
        <input id='searchBar' type='text' placeholder='Search here..' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      </div>

      <div>
        {loading && <div>Loading...</div>}
        {error && <p>Error: {error.message}</p>}
            <ul>
                {data?.results?.map((user, index) => (
                    <li key={index}>{user.name.first} {user.name.last}</li>
                ))}
            </ul>
      </div>
    </div>
  )
}

export default SearchBar;