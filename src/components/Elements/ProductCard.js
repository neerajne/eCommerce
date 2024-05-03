import { Link } from "react-router-dom";

export const ProductCard = () => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 p-2">
      <div className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <Link to="/" className="relative block">
          <span className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded">Best Seller</span>
          <img className="rounded-t-lg w-full h-auto sm:h-64" src="/assets/images/10001.avif" alt="" />
        </Link>
        <div className="p-5">
          <Link to="/">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">The Complete Guide to Backend Development</h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error unde quisquam magni vel eligendi nam.</p>
          
          <div className="flex items-center my-2">
            <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
            <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
            <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
            <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
            <i className="text-lg bi bi-star text-yellow-500 mr-1"></i>
          </div>

          <p className="flex justify-between items-center">
            <span className="text-2xl dark:text-gray-200">
              <span>$</span><span>29</span>
            </span>
            <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">Add To Cart <i className="ml-1 bi bi-plus-lg"></i></button>
          </p>
        </div>
      </div>
    </div>
  )
}
