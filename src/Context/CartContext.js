import { useContext, useReducer } from "react";
import { cartReducer } from "../reducers";
const { createContext } = require("react");

const cartInitialState = {
  cartList: [],
  total: 0,
};

const cartContext = createContext(cartInitialState);

export const CartProvider = ({ children }) => {

const [state, dispatch] = useReducer(cartReducer, cartInitialState);


function addToCart(product){
  const updatedCartList = state.cartList.concat(product);
  const updatedTotal = state.total + product.price ;
  dispatch({
    type : "ADD_TO_CART" ,
    payload :{
      products : updatedCartList,
      total :updatedTotal
    }
  })
}

function removeFromCart(product){
  const updatedCartList = state.cartList.filter((element) => element.id !== product.id);
  const updatedTotal = state.total - product.price ;

  dispatch({
    type : "REMOVE_FROM_CART",
    payload : {
      products : updatedCartList,
      total :updatedTotal
    }
  })
}

function clearCart(){
  dispatch({
    type : "CLEAR_CART",
    payload:{
      products: [],
      total : 0

    }
  })


}

const value = {
    cartList: state.cartList,
    total: state.total,
    addToCart,
    removeFromCart,
    clearCart
  };
  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};
export const useCart = () => {
  const context = useContext(cartContext);
  return context;
};
