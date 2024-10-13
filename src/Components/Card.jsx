import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../redux/store/slices/dataSlice'
import Carousel from './Carousel'
import Button from './Button'

const Card = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.data);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(items);


  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query === '') {
      setFilteredProducts(items);
    } else {
      const filtered = items.filter((product) =>
        product.description.toLowerCase().includes(query)
      );
      setFilteredProducts(filtered);
    }
  };


  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchData());
    }
  }, [dispatch, status]);

  if (status === 'loading') {
    return <div className="flex justify-center items-center h-screen">
      <div className="animate-spin text-blue-700 text-9xl ">★</div>
    </div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }






  return (
    <>
      <div className="carousal">
        <Carousel />
      </div>

      <div className="w-[80%] relative flex justify-center items-center h-14   mt-16 mx-auto">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search..."
          className="w-[50%] px-5 py-3 border rounded-l-full bg-[#F4F4F4] focus:outline-none focus:shadow-lg "
        />
        <button className="searchicon text-center py-6 px-6 rounded-r-full border flex items-center justify-center h-10 bg-[#F4F4F4] ">
          <lord-icon
            src="https://cdn.lordicon.com/wjyqkiew.json"
            trigger="hover"
            colors="primary:#121331,secondary:#1f3e97"
           >
          </lord-icon>

        </button>
      </div>


      <div className="PopularCatogary mx-auto mt-16 bg-[#F4F4F4] h-12 p-9 rounded-full flex items-center w-[70vw] ">
        <h2 className="text-2xl text-[#1F3E97] font-Pasifico font-bold">Popular Categories</h2>
      </div>


      <div>
        <div className="mx-auto flex mt-9 flex-wrap justify-center mb-12 w-[85vw]">

          {filteredProducts.length > 0 ? (
            <ul className='flex justify-center flex-wrap'>
              {filteredProducts.map((product) => (
                <div key={product.id} className="group  flex justify-start flex-col items-center cursor-pointer border-2 hover:border-[#1F3E97] hover:bg-gray-200 h-90 shadow-sm m-6 p-3 rounded-2xl  w-60 relative  h-90 bg-white  overflow-hidden">
                  {/* Product Image */}
                  <div className="shadow-xl overflow-hidden  flex items-center justify-center  h-60 w-[80%]">
                    <img
                      src={product.image}
                      alt={product.title.length > 40 ? `${product.title.substring(0, 30)}...` : product.title}
                      className="w-full rounded-2xl object-cover transition-all duration-500 group-hover:opacity-80"
                    />
                  </div>
                  <div className="title mt-3 text-start">
                    <h2 className=" font-semibold text-sm  transition-all duration-500 group-hover:translate-y-6">
                      {product.title.length > 40 ? `${product.title.substring(0, 30)}...` : product.title}
                    </h2>
                  </div>
                  <div className="price mt-3">
                    <p className='font-semibold transition-all duration-500 group-hover:translate-y-6 text-start text-sm'>Price: {product.price}$</p>
                  </div>

                  <div className="addCart">
                    <p className='z-40 absolute right-3 bottom-3 top-3'><lord-icon
                      src="https://cdn.lordicon.com/ggirntso.json"
                      trigger="hover"
                      colors="primary:#121331,secondary:#1f3e97"
                    >
                    </lord-icon></p>
                  </div>

                  {/* Order Now & Add to Cart (Visible on Hover) */}
                  <div className="absolute bottom-0 left-0 w-full h-full flex justify-center  items-end opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                    <Button color="text-white  transition-all duration-500 hover:bg-white hover:text-[#1F3E97] border-2 hover:border-[#1F3E97] bg-[#1F3E97] transition duration-300 ease-in-out font-semibold mb-3 rounded-full px-4 py-2" title="Order Now" />



                  </div>

                  <div className="absolute top-0 left-0 w-full h-12 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out transform -translate-y-10 group-hover:translate-y-0">
                    <span className="text-black-400 ">{[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={i < product.rating.rate ? 'text-yellow-400' : 'text-gray-300'}
                      >
                        ★
                      </span>
                    ))}
                    </span>
                    <p className="text-gray-400 ml-2">{product.rating.rate} ({product.rating.count})</p>
                  </div>
                </div>
              ))}
            </ul>
          ) : (
            <p className="text-red-500 mt-2">Product not found</p>
          )}
        </div>
      </div>
    </>
  );
}



export default Card;
