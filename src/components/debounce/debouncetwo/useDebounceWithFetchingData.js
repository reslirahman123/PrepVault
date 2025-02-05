import React, { useEffect, useState } from 'react'

const useDebounceWithFetchingData = (url, inputValue, delay = 2000) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setloading] = useState(false);
    console.log("debounce-inputValue", inputValue)
    const [debouncedValue, setDebouncedValue] = useState(inputValue);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(inputValue)
        }, delay)

        return () => clearTimeout(handler)

    }, [inputValue, delay])

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                setloading(true)
                const response = await fetch(url);
                const result = await response.json();
                // console.log("result", result)
                setData(result)

            } catch (error) {
                setError(error)
            } finally {
                setloading(false)
            }
        }


        fetchUserData();
    }, [url, debouncedValue])

    return { data, error, loading }
}

export default useDebounceWithFetchingData;