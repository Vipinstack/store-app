import React from 'react'
import "../../src/styles/card.css";

const Card = ({ product, handleShowModal }: any) => {
    return (
        <>
            <section>
                <a href={product.canonical_url} style={{textDecoration:'none'}}>
                    <div className="allProdcut_productCard">
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
                    </div>
                </a>
            </section>
        </>
    )
}

export default Card
