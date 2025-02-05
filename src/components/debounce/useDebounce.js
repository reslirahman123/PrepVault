import React, { useEffect, useState } from 'react'

export const useDebounce = (value, delay=500) => {

    const [debouncedValue, setDebouncedValue] = useState(value); //

    useEffect(() => {
        const timerId = setTimeout(()=> {
            setDebouncedValue(value);
        }, delay);

        return () => clearTimeout(timerId);
    },[value, delay]);
    
    return debouncedValue; //
}




// const useCustomhook = () => {


//     // how many states do i want
//     const [data, setData] = useState();
//     const [error, setError] = useState();

//     // useEffect
//     useEffect(() => {
//         // write whatever logic you want inside
//     })

//     // return all the states you create

//     return [data, error];
// }