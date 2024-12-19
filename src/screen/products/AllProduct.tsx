"use client"
import React, { useState } from 'react'
import "../../styles/AllProduct.css";
import Card from '@/component/card';
import dummyData from '../../../public/dummyData.json';
import Modal from '@/component/Modal';

const AllProduct = () => {
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
            <section className="allProduct_wrapper">
                <div className="allProduct_container">
                    <div className="allProduct_listing">
                        <div className="allProduct_title"><h2>All Products</h2></div>
                        <div className="allProdcut_dynamic">
                            <ul>
                                {dummyData?.map((product, i): any => {
                                    return (
                                        <>
                                            <li key={i}>
                                                {/* <div className="allProdcut_productCard">
                                                    <div className="allProdcut_product-img">
                                                        <img src={product.imageUrl ? product.imageUrl : "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="} />
                                                        <div className="allProdcut_product_zoom" onClick={() => handleShowModal(product.id)}>
                                                            <div>
                                                                <img src="https://static.im-cdn.com/mjc/storefront/Grace/static/media/Zoom.bfc15475.svg" alt="zoom" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="allProdcut_product_off">{product.priceOff}% Off</div>
                                                    <h2>{product.title}</h2>
                                                    <div className="allProdcut_productTitle">
                                                        <h3>₹{product.price}</h3>
                                                        <p>₹{product.originalPrice}</p>
                                                    </div>
                                                    <p className="allProdcut_prodcutInnerText">Incl. of taxes</p>
                                                </div> */}
                                                <Card product={product} handleShowModal={handleShowModal} />
                                            </li>
                                        </>)
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="pagination_container">
                        <div className="pagination">
                            <div className="page">Page 1 of 1</div>
                            <div className="prev-next">
                                <button className="prev">PREVIOUS</button>
                                <div className="count_wrapper">
                                    <div className="count">1</div>
                                </div>
                                <button className="next">NEXT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {showModal && modalProduct && (
                <Modal show={showModal} product={modalProduct} onClose={handleCloseModal} />
            )}
        </>
    )
}

export default AllProduct
