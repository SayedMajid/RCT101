import React, {createContext, useState, useContext} from "react"
import { AuthContext } from "./AuthContext";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const { isAuth } = useContext(AuthContext);
    const [count, setCount] = useState(0)
    const addToCart = () => {
        setCount(count + 1)
    }
    const buy = () => {
        if(isAuth){
            console.log("Can Buy")
        }else{
            console.log('Cannot Buy wihtout loggin');
        }
    }

    return (
        <CartContext.Provider value={{count, addToCart, buy}}>
            {children}
        </CartContext.Provider>
    )
}