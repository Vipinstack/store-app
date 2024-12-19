"use client"
import React, { useEffect, useState } from 'react';
import '../../src/styles/Modal.css';
import axios from 'axios';

const Modal = ({ show, product, onClose }: any) => {
    if (!show) return null;
    const [data, setData] = useState<any>([]);
    const [imgHover, setImgHover] = useState<any>(null);
    const [imgHoverIndex, setImgHoverIndex] = useState<number | null>(0);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/dummyData.json');
                const filterData = response.data.filter((data: any) => data.id === product);
                setData(filterData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [product]);

    return (
        <>
            {data.map((item: any, index: any) => {
                return (<>
                    <div className="modal" key={index}>
                        <div className="modal-content">
                            <span className="close" onClick={onClose}>&times;</span>
                            <div className="modal_body">
                                <div className="modal_relative">
                                    <div className="modal_imgs">
                                        <div className="modal_row">
                                            <div className="modal_larg_img">
                                                <img src={imgHover !== null ? imgHover : item.imageUrl} alt='main-img'></img>
                                            </div>
                                            <div className="modal_sel_img">
                                                <ul>
                                                    {item?.img?.map((e: any, index: any) => (
                                                        <li key={index} onClick={() => {setImgHover(e),setImgHoverIndex(index)}} className={imgHoverIndex === index ? 'modal_onClick' : ''}>
                                                            <img src={e} alt="sub-img" />
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal_content">
                                        <div className="modal_content_body">
                                            <h2>{item.title}</h2>
                                            <div className="modal_card">
                                                <div className="modal_tax">
                                                    <h2>₹{item.price}</h2>
                                                    <p>₹{item.originalPrice}</p>
                                                    <p className="modal_tax_title">Incl. of taxes</p>
                                                </div>
                                                <div className="modal_quantity">
                                                    <div className="quantity">
                                                        Quantity
                                                    </div>
                                                    <div className="modal_btns">
                                                        <button className="btn1">-</button>
                                                        <div className="btn_count">1</div>
                                                        <button className="btn2">+</button>
                                                    </div>
                                                </div>
                                                <div className="modal_cart_btn">
                                                    <div className="modal_add_btn">Add to Cart</div>
                                                    <div className="modal_view_btn">View Details</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>)
            })
            }
        </>
    );
};

export default Modal;
