import { Route,Routes } from "react-router-dom" ;
import {HomePage} from "../pages/Home/HomePage" ;
import { Login, ProductsList, Register , OrderPage, Dashboardpage, PageNotFound } from "../pages";
import { ProductDetail } from "../pages";
import {ProtectedRoutes} from "./ProtectedRoutes" ;
import {CartPage} from "../pages/Cart/CartPage"




export const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element = {<HomePage/>} />
        <Route path="/ProductList" element = {<ProductsList/>} />
        <Route path="/products/:id" element = {<ProductDetail/>} />
        <Route path="/login"  element = {<Login/>}   />
        <Route path="/register" element={<Register/>}/>
        <Route path="/cart" element={ <ProtectedRoutes><CartPage/></ProtectedRoutes> }/>
        <Route path="/order-summary" element={ <ProtectedRoutes><OrderPage/></ProtectedRoutes> }/>
        <Route path="/dashboard" element={ <ProtectedRoutes><Dashboardpage/></ProtectedRoutes> }/>
        <Route path="*" element={<PageNotFound/> }/>
         
    </Routes>
      
    </>
  )
}


