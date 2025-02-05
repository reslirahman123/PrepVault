import React, { cache, useEffect, useState } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(() => {
    const cacheData = localStorage.getItem(url)
    return cacheData ? JSON.parse(cacheData) : []
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true)
        const response = await fetch(url);
        const result = await response.json();
        console.log("result", result)
        setData(result)
        localStorage.setItem(url, JSON.stringify(result))

      }
      catch (error) {
        setError(error)
        setLoading(true)
      } finally {
        setLoading(false)
      }
    }

    if(localStorage.getItem(url)){
      fetchUserData();
    }
    
  }, [url])
  return { data, loading, error }
}

export default useFetch