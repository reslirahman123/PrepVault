import React, { act, createContext, useEffect, useReducer, useState } from 'react'

export const AppContext = createContext();

const ApplicationProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
 

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();
                setProducts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <AppContext.Provider value={{products, loading, error}}>
            {children}
        </AppContext.Provider>
    )
}

export default ApplicationProvider