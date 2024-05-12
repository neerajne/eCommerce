import { useState } from "react";
import { useEffect } from "react";
import { DashboardCard } from "./components/DashboardCard";
import { DashboardEmpty } from "./components/DashboardEmpty"
import {getUserOrders} from "../../services" ;
import { ChangeTitle } from "../../hooks/ChangeTitle";
import{toast  , Slide} from "react-toastify";

export const Dashboardpage = () => {
  const [orders, setOrders] = useState([]);
  ChangeTitle("Order History dashboard");

  const token = JSON.parse(sessionStorage.getItem("token"));
  const cbid = JSON.parse(sessionStorage.getItem("cbid"));

  useEffect(() => {
    async function fetchOrders(){
      try {
        const data = await getUserOrders()
        setOrders(data);
      } catch (error) {
        toast.error('error.message', {
          position: "top-right",
          autoClose: 2001,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
          });
      }
        
    }
    fetchOrders();
  }, [cbid , token , orders]);

  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My Dashboard</p>
      </section>

      <section>
        { orders.length && orders.map((order) => (
          <DashboardCard key={order.id} order={order} />
        )) }
      </section>

      <section>
        { !orders.length && <DashboardEmpty /> }
      </section>

    </main>
  )
}