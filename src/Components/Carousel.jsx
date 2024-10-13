

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nextSlide, prevSlide } from '../redux/store/slices/sliderSlice';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import Button from "./Button"







const Carousel = () => {
    

    const dispatch = useDispatch();
    const { products, currentIndex } = useSelector((state) => state.slider);

    const currentProduct = products[currentIndex];
    const title = currentProduct.title;

    const truncateTitle = (title, maxLength) => {
        if (title.length > maxLength) {
            return title.slice(0, maxLength) + '......';
        }
        return title;
    };
    



    const maxTitleLength = 69;
    const rating = currentProduct.rating.rate;

    const renderStars = (rating) => {
        const totalStars = 5; 
        const filledStars = Math.floor(rating); 
        const halfStar = rating - filledStars >= 0.5; 

        return [...Array(totalStars)].map((_, index) => {
            if (index < filledStars) {
                // Full star
                return <span key={index} className="text-yellow-500">★</span>;
            } else if (index === filledStars && halfStar) {
                // Half star
                return <span key={index} className="text-yellow-500">★</span>; // You can use a custom half-star SVG if needed
            } else {
                // Empty star
                return <span key={index} className="text-gray-300">★</span>;
            }
        });
    };

    function applyDiscount(price) {
        const discount = 0.20; // 20% discount
        const discountedPrice = price - (price * discount);
        return discountedPrice;
      }
      
      // Example usage:
      const originalPrice = currentProduct.price // Rs 100
      const finalPrice = applyDiscount(originalPrice);
      console.log(`The final price after 20% off is Rs ${finalPrice}`);
     


    return (
        <div  className={`relative w-[100%] animate-slideInFromRight cursor-pointer shadow-md h-96 flex justify-around items-center bg-gray-100 p-8`}>
            {/* Left side: Text */}
            <div className="flex-1   w-[50%] text-left pr-8">
                <div className="titles">
                    <h2 className="text-4xl text-[#1F3E97] font-bold ">{truncateTitle(title, maxTitleLength)}</h2>
                    <p className="text-lg  line-through text-gray-400 mt-2">{currentProduct.price}$</p>
                    <p className="text-lg  font-semibold text-gray-600 mt-2">Only For: {finalPrice}$</p>
                </div>
                <div className="flex">
                    <Button color="text-white mt-9 transition-all duration-500 hover:bg-white hover:text-[#1F3E97] border-2 hover:border-[#1F3E97] bg-[#1F3E97] font-semibold rounded-full px-4 py-2" title="Order Now" />
                    <Button color="text-white mt-9 transition-all duration-500 hover:bg-white hover:text-[#1F3E97] border-2 hover:border-[#1F3E97] bg-[#1F3E97] font-semibold rounded-full px-4 py-2" title="Add to Cart" />

                </div>

                <div className='relative right-0 bottom-0'>

                    <p className="text-lg right-0 top-0 absolute text-gray-600 ">{renderStars(rating)} {currentProduct.rating.rate} </p>
                </div>
            </div>

            {/* Right side: Product Image */}
            <div className="flex-1 flex  items-center justify-center w-[50%]">
                <img
                    src={currentProduct.image}
                    alt={currentProduct.title}
                    className="w-[60%]   h-[50%] object-cover rounded-lg shadow-2xl"
                />
            </div>

            {/* Controls */}
            <button
                onClick={() => {dispatch(prevSlide())}}
                className="absolute right-12 bottom-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md shadow-gray-700 hover:bg-gray-700 transition duration-300"
            >
                <ChevronLeftIcon className="h-6 w-6" />
            </button>

            <button
                onClick={() => {dispatch(nextSlide())}}
                className="absolute right-0 bottom-0 transform -translate-y-1/2 bg-gray-800 text-white shadow-md shadow-gray-700 p-2 rounded-full hover:bg-gray-700 transition duration-300"
            >
                <ChevronRightIcon className="h-6 w-6" />
            </button>
        </div>
    );
};

export default Carousel;
