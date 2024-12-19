"use client";
import '../../styles/featureProduct.css';
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from 'react';
import Card from '@/component/card';
import dummyData from '../../../public/dummyData.json';
import Modal from '@/component/Modal';

const FeatureProduct = () => {
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const updateButtonStates = (swiper: any) => {
    setIsPrevDisabled(swiper.isBeginning);
    setIsNextDisabled(swiper.isEnd);
  };

  const [modalProduct, setModalProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = (product: any) => {
    setModalProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalProduct(null);
  };


  return (
    <>
      <section className="featureProduct-wrapper">
        <div className="featureProduct-container">
          <div className="feature-title">
            <h2>Featured Products</h2>
          </div>
          <div className="silder-wrapper">
            <Swiper
              spaceBetween={30}
              slidesPerView={4}
              slidesPerGroup={4}
              modules={[Navigation]}
              navigation={{
                prevEl: '.custom-prev',
                nextEl: '.custom-next',
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
                  {/* <div className="productCard">
                    <div className="product-img">
                      <img src={product.imageUrl ? product.imageUrl : "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="} />
                      <div className="product_zoom">
                        <a href="">
                          <img src="https://static.im-cdn.com/mjc/storefront/Grace/static/media/Zoom.bfc15475.svg" alt="zoom" />
                        </a>
                      </div>
                    </div>
                    <div className="product_off">{product.priceOff}% Off</div>
                    <h2>{product.title}</h2>
                    <div className="productTitle">
                      <h3>₹{product.price}</h3>
                      <p>₹{product.originalPrice}</p>
                    </div>
                    <p className="prodcutInnerText">Incl. of taxes</p>
                  </div> */}
                  <Card product={product} handleShowModal={handleShowModal} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={`custom-prev ${isPrevDisabled ? 'disabled' : ''}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" color="#8080808c" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className={`custom-next ${isNextDisabled ? 'disabled' : ''}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" color="#8080808c" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </section>
      {showModal && modalProduct && (
        <Modal show={showModal} product={modalProduct} onClose={handleCloseModal} />
      )}
    </>
  )
}

export default FeatureProduct;
