"use client";
import React, { useEffect, useState } from 'react';
import '../../src/styles/Modal.css';
import axios from 'axios';

interface ModalProps {
  show: boolean;
  product: number;
  onClose: () => void;
}

interface ProductData {
  id: number;
  title: string;
  price: number;
  originalPrice: number;
  imageUrl: string;
  img: string[];
}

const Modal: React.FC<ModalProps> = ({ show, product, onClose }) => {
  const [data, setData] = useState<ProductData[]>([]);
  const [imgHover, setImgHover] = useState<string | null>(null);
  const [imgHoverIndex, setImgHoverIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/dummyData.json');
        const filteredData = response.data.filter((item: ProductData) => item.id === product);
        setData(filteredData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (product) fetchData();
  }, [product]);

  const handleImageHover = (image: string, index: number) => {
    setImgHover(image);
    setImgHoverIndex(index);
  };

  if (!show) return null;

  if (data.length === 0) {
    return (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>&times;</span>
          <div className="modal_body">
            <p>Loading or no data available...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        {data.map((item) => (
          <div className="modal_body" key={item.id}>
            <div className="modal_relative">
              {/* Images Section */}
              <div className="modal_imgs">
                <div className="modal_row">
                  <div className="modal_larg_img">
                    <img
                      src={imgHover || item.imageUrl}
                      alt="main-img"
                      className="large-image"
                    />
                  </div>
                  <div className="modal_sel_img">
                    <ul>
                      {item.img.map((img, index) => (
                        <li
                          key={index}
                          onClick={() => handleImageHover(img, index)}
                          className={imgHoverIndex === index ? 'modal_onClick' : ''}
                        >
                          <img src={img} alt={`thumbnail-${index}`} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              {/* Product Details Section */}
              <div className="modal_content">
                <div className="modal_content_body">
                  <h2>{item.title}</h2>
                  <div className="modal_card">
                    <div className="modal_tax">
                      <h2>₹{item.price}</h2>
                      <p className="original-price">₹{item.originalPrice}</p>
                      <p className="modal_tax_title">Incl. of taxes</p>
                    </div>
                    <div className="modal_quantity">
                      <div className="quantity">Quantity</div>
                      <div className="modal_btns">
                        <button className="btn1">-</button>
                        <div className="btn_count">1</div>
                        <button className="btn2">+</button>
                      </div>
                    </div>
                    <div className="modal_cart_btn">
                      <button className="modal_add_btn">Add to Cart</button>
                      <button className="modal_view_btn">View Details</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Modal;