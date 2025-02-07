import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedData = localStorage.getItem("user");
        if(storedData) setUser(JSON.parse(storedData))
    },[])


    const login = (email, password) => {
        if(email === "test@example.com" && password === "password"){
            const userData = {
                email,
                token : 'fake-jwt-token'
            };
            localStorage.setItem("user", JSON.stringify(userData));
            setUser(userData);
            return true;
        }return false
    };

    const logout = () =>{
        localStorage.removeItem("user");
        setUser(null)
    }


    return (
        <AuthContext.Provider value={{login , user, logout}}>
            {children}
        </AuthContext.Provider>
    )
}
