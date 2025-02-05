import React, { useState } from 'react'
import { users } from './users'
import { useDebounce } from './useDebounce';

const FilterUsers = () => {

    const [query, setQuery] = useState('');
    const allUsers = users;
    const filteredQuery = useDebounce(query, 2000);
    const filteredUsers = allUsers.filter((val) => {
        return val.username.includes(filteredQuery)
    })

    console.log("filteredUsers",filteredUsers);
    return (
        <div>
            <div>
                <label htmlFor='searchBar'>Search Bar: </label>
                <input id='searchBar' type='text' placeholder='Search here..' value={query} onChange={(e) => setQuery(e.target.value)} />
            </div>
            <ul>
                {filteredUsers?.map((userDetails, index) => {
                    const { name, phone, username } = userDetails;
                    return <li key={index}>
                        <p>{`${name}- ${phone}- ${username}`}</p>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default FilterUsers;