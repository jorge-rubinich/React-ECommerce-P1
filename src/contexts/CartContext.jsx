import {useState, createContext} from 'react';

export const CartContext = createContext();

const CartGlobal = (props) => {
    const [cart, setCart] = useState([]);
    const [totalCompra, setTotalCompra] = useState(0);

    const addToCart = (compra) => {
        if (itemIsInCart(compra.id)) {
            const newCart = cart.map((i) => {
                if (i.id === compra.id) {
                    return compra;

                } else {
                    return i;
                }
            });
            setCart(newCart);
        } else {
        setCart([...cart, compra]);
        };
    };

    const itemIsInCart = (id) => {
        return cart.some((i) => i.id === id);
    };

    const removeItem = (id) => {
        const newCart = cart.filter((i) => i.id !== id);
        setCart(newCart);
    };

    const deleteCart = () => {
        setCart([]);
    };

    const calcTotal = () => {
        let total = 0;
        cart.forEach((i) => {
            total += i.cantidad * i.precio;
        });
        return total;
    };

    return ( 
        <CartContext.Provider value={{cart, addToCart, deleteCart, totalCompra, calcTotal, removeItem}}>
            {props.children}
        </CartContext.Provider>
        );
};

export default CartGlobal;
