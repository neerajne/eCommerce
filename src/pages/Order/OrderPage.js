import {OrderSuccess} from "./components/OrderSuccess";
import {OrderFail} from "./components/OrderFail";
import { useLocation } from "react-router-dom";
import { ChangeTitle } from "../../hooks/ChangeTitle";

export const OrderPage = () => {
    const { state } = useLocation();
    ChangeTitle("Order summary");

    return (
      <main>
        { state.status ? <OrderSuccess data={state.data} /> : <OrderFail /> }
      </main>
    )
}


