import React, { useEffect, useState } from 'react'
import useFetch from './useFetch'
import List from './List'

const User = () => {
    const url = 'https://randomuser.me/api?results=10'
    const { data, error, loading } = useFetch(url)
    const [userData, setUserData] = useState([])

    useEffect(() => {
        if (data?.results) {
            setUserData(data?.results)
        }
    }, [data])
    console.log("userData", userData)

    const handleLoadMore = async () =>{
        const response = await fetch(url);
        const data = await response.json();
        setUserData((prevData) => [...prevData, ...data.results])
    }

    if(loading) return <div>Loading....</div>
    if(error) return <div>{error}</div>

    return (
        <div>
           <List data={userData}/>
        <button onClick={handleLoadMore}>Load More</button>
        </div>
    )

}

export default User