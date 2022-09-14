const React = require('react');
const { createContext, useState } = React;

const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [selectedProducts, setSelectedProducts] = useState([]);

    return (

        <CartContext.Provider
            value={{ selectedProducts, setSelectedProducts }}
        >
            {children}
        </CartContext.Provider>
    )
}

module.exports = { CartProvider, CartContext }