import { Route,Routes } from "react-router-dom" ;
import {HomePage} from "../pages/Home/HomePage" ;
import { ProductsList } from "../pages";
import { ProductDetail } from "../pages";


export const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element = {<HomePage/>} />
        <Route path="/ProductList" element = {<ProductsList/>} />
        <Route path="/products/:id" element = {<ProductDetail/>} />
    </Routes>
      
    </>
  )
}


