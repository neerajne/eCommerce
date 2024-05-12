import { useEffect, useState } from "react";
import { ProductCard } from "../../../components";
import {getFeaturedProducts} from "../../../services" ;
import { toast  , Bounce} from "react-toastify";

export const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    async function fetchProducts(){
      try {
        const data = await getFeaturedProducts();
        setProducts(data);
        console.log(data);
      } catch (error) {
        toast.error(error.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
          })
      }
    
    }
    fetchProducts();
  },[])
  return (
    <section className="my-20">
        <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Featured eBooks</h1>    
        <div className="flex flex-wrap justify-center lg:flex-row">
        {products.map((product) =>(
          <ProductCard key={product.id} product = {product} />
        ))}
    
        </div>
    </section>
  )
}