import { Link } from "react-router-dom";
import { Rating } from "./Rating";
import { useCart } from "../../Context";
import { useEffect, useState } from "react";

export const ProductCard = ({ product }) => {
  const [inCart, setInCart] = useState(false);
  const { id, name, overview, poster, price, rating, best_seller } = product;
  const { addToCart , removeFromCart , cartList} = useCart();

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
    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 p-2">
      <div className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <Link to={`/products/${id}`} className="relative block">
          {best_seller ? (
            <span className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded">
              Best Seller
            </span>
          ) : (
            <span className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded"></span>
          )}
          <img
            className="rounded-t-lg w-full h-auto sm:h-64"
            src={poster}
            alt={name}
          />
        </Link>
        <div className="p-5">
          <Link to="/">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {overview}
          </p>

          <div className="flex items-center my-2">
            <Rating rating={rating} />
          </div>

          <p className="flex justify-between items-center">
            <span className="text-2xl dark:text-gray-200">
              <span>$</span>
              <span>{price}</span>
            </span>
            {!inCart && <button onClick={() => addToCart(product)} className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800`} style={{ cursor: product.in_stock ? 'pointer' : 'not-allowed' }} disabled={!product.in_stock}>Add To Cart <i className="ml-1 bi bi-plus-lg"></i></button>}
                { inCart && <button onClick={() => removeFromCart(product)} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800">Remove Item <i className="ml-1 bi bi-trash3"></i></button> }
          </p>
        </div>
      </div>
    </div>
  );
};
