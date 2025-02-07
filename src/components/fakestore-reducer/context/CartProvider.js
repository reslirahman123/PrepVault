import React, { createContext, useReducer } from 'react';


export const cartContext = createContext();
const initialState = {
    cart: [],
};
const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const existingItem = state.cart.find(item => item.id === action.payload.id);
            if (existingItem) {
                return {
                    ...state,
                    cart: state.cart.map(item =>
                        item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
                    )
                };
            } else {
                return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] };
            }

        case "INCREASE_QUANTITY":
            return {
                ...state,
                cart: state.cart.map((item) => item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item)
            }
        case "DECREASE_QUANTITY":
            return {
                ...state,
                cart: state.cart.map((item) => item.id === action.payload && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 }
                    : item)
            }

        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload)
            }

        default: return state;
    }

}

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState)
    console.log("state", state)

    return (
        <cartContext.Provider value={{ cart: state.cart, dispatch }}>
            {children}
        </cartContext.Provider>
    )
}
