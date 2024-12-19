"use client"
import React from 'react'
import '../../styles/BrainhubCarousel.css'
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from 'react';
const dummyData = [
    {
        id: 1,
        imageUrl: 'https://storeassets.im-cdn.com/sliders/342511/slider_image1_1639324376_0x0_webp.PNG',
        title: 'Get 50% off on tables & chairs',
        sub_title: 'Try our range of home tables & chairs and get an exclusive discount of upto 50%',
    },
    {
        id: 2,
        imageUrl: 'https://storeassets.im-cdn.com/sliders/342511/slider_image2_1639324440_0x0_webp.PNG',
        title: 'Modern Elegant Comforting',
        sub_title: 'Introducing new 2 seater sofa with vibrant colors & modern design',
    },

];
const BrainhubCarousel = () => {
    const [isPrevDisabled, setIsPrevDisabled] = useState(true);
    const [isNextDisabled, setIsNextDisabled] = useState(true);
    const updateButtonStates = (swiper: any) => {
        setIsPrevDisabled(swiper.isBeginning);
        setIsNextDisabled(swiper.isEnd);
    };
    return (
        <>
            <section className="slider_containerBg">
                <div className="silder_container">
                    <div className="BrainhubCarousel__container">
                        <div className="Brainhub_Carousel">
                            <div className={`custom-btn-prev ${isPrevDisabled ? 'disabled' : ''}`}>
                                <svg width="20" height="20" viewBox="0 0 24 24" color="#8080808c" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className={`custom-btn-next ${isNextDisabled ? 'disabled' : ''}`}>
                                <svg width="20" height="20" viewBox="0 0 24 24" color="#8080808c" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <Swiper
                                spaceBetween={3}
                                slidesPerView={1}
                                slidesPerGroup={1}
                                pagination={{
                                    el: '.swiper-pagination-custom',
                                    clickable: true,
                                    renderBullet: (index, className) => {
                                        return `<div class="${className} custom-bullet" data-index="${index}"></div>`;
                                    },
                                }}
                                autoplay={{ delay: 2500, disableOnInteraction: false }}
                                loop={true}
                                modules={[Autoplay, Navigation, Pagination]}
                                navigation={{
                                    prevEl: '.custom-btn-prev',
                                    nextEl: '.custom-btn-next',
                                }}
                                onSwiper={(swiper: any) => {
                                    updateButtonStates(swiper);
                                }}
                                onSlideChange={(swiper) => {
                                    updateButtonStates(swiper);
                                }}
                            >
                                {dummyData.map((product, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="Brainhub_slides">
                                            <div className="Brainhub_Carousel_img">
                                                <img src={product.imageUrl ? product.imageUrl : "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="} />
                                            </div>
                                        </div>
                                        <div className="BannerCarousal_textContainer">
                                            <h1>{product.title}</h1>
                                            <p>{product.sub_title}</p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div className="BrainhubCarousel__dots">
                            <div className="swiper-pagination-custom"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BrainhubCarousel
