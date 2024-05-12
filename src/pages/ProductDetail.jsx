import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Rating } from "../components";
import { ChangeTitle } from "../hooks/ChangeTitle";
import { useCart } from "../Context";
import { getProduct } from "../services";
import { toast  , Bounce} from "react-toastify";

export const ProductDetail = () => {

  const {id } =  useParams() ;
  const [inCart, setInCart] = useState(false);
  const [product , setProduct] = useState ({ });
  ChangeTitle(product.name);
  ChangeTitle(product.name);
  const { addToCart , cartList , removeFromCart } = useCart() ;
  useEffect(() => {
    async function fetchProducts(){
      try {
        const data = await getProduct(id);
      setProduct(data);
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
      fetchProducts( )
    }
   , [id ])

   useEffect(() => {
    const productInCart = cartList.find((item) => item.id ===product.id) ;

    if(productInCart){
      setInCart(true);
    }
    else{
      setInCart(false);
    }
        },  [cartList, product.id]);




    return (
      <main>
          <section>
            <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-slate-200">{product.name}</h1>
            <p className="mb-5 text-lg text-center text-gray-900 dark:text-slate-200">{product.overview}</p>
            <div className="flex flex-wrap justify-around">
              <div className="max-w-xl my-3">
                <img className="rounded" src={product.image_local} alt={product.name}/>
              </div>
              <div className="max-w-xl my-3">
                <p className="text-3xl font-bold text-gray-900 dark:text-slate-200">
                  <span className="mr-1">$</span>
                  <span className="">{product.price}</span>
                </p>
                <p className="my-3"> 
                  <span>
                  <Rating rating={product.rating}/>
                  </span>
                </p>
                <p className="my-4 select-none">
                {product.best_seller && (<span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2 btn btn-outline-success ">BEST SELLER</span>)}     
                 { product.in_stock ? (<span className="font-semibold text-emerald-600	border bg-slate-100 rounded-lg px-3 py-1 mr-2 btn btn-outline-warning ">INSTOCK</span>) : (<span className= "font-semibold text-rose-700 border bg-slate-100 rounded-lg px-3 py-1 mr-2 btn btn-outline-danger">OUT OF STOCK</span>)   }
                  <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2  btn btn-outline-info ">{product.size} MB </span>
                </p>
                <p className="my-3">
                {!inCart && <button onClick={() => addToCart(product)} className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800`} style={{ cursor: product.in_stock ? 'pointer' : 'not-allowed' }} disabled={!product.in_stock}>Add To Cart <i className="ml-1 bi bi-plus-lg"></i></button>}
                  { inCart && <button onClick={() => removeFromCart(product)}  className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800`}  >Remove Item <i className="ml-1 bi bi-trash3"></i></button> }
                </p>
                <p className="text-lg text-gray-900 dark:text-slate-200">
                 {product.long_description}
                </p>
              </div>
            </div>
          </section>
        </main> 
    )
  }