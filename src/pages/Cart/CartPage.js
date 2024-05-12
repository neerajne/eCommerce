import { useCart } from "../../Context";
import { CartEmpty } from "./components/CartEmpty";
import {CartList} from "./components/CartList" ;
import { ChangeTitle } from "../../hooks/ChangeTitle";

export const CartPage = () => {
  const {cartList} = useCart() ;
  ChangeTitle(`Cart (${cartList.length})`)
    
    return (
      <main>      
          {cartList.length ?  <CartList/> : <CartEmpty/> }
      </main>
    )
  }