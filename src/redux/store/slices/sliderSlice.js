// src/redux/sliderSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [
      {
        "id": 20,
        "title": "DANVOUY Womens T Shirt Casual Cotton Short",
        "price": 12.99,
        "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
        "rating": {
          "rate": 3.6,
          "count": 145
        }
      },
        {
            "id": 2,
            "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
            "price": 109,
            "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
            "category": "electronics",
            "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
            "rating": {
              "rate": 4.8,
              "count": 319
            }
          },
          {
            "id": 3,
            "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
            "price": 999.99,
            "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
            "category": "electronics",
            "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
            "rating": {
              "rate": 2.2,
              "count": 140
            }
          },
    ],
    currentIndex: 0,
};

const sliderSlice = createSlice({
    name: 'slider',
    initialState,
    reducers: {
        nextSlide: (state) => {
            state.currentIndex = (state.currentIndex + 1) % state.products.length;
        },
        prevSlide: (state) => {
            state.currentIndex = (state.currentIndex - 1 + state.products.length) % state.products.length;
        },
    },
});

export const { nextSlide, prevSlide } = sliderSlice.actions;
export default sliderSlice.reducer;
