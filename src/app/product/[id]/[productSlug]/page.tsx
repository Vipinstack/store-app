import BreadCrumbs from '@/component/BreadCrumbs';
import config from '@/config/config';
import React from 'react'
import '../../../../styles/ProductDetail.css';
import '../../../../styles/Modal.css';

type productValidate = {
  params: {
    id: any;
    productSlug: string
  };
};

const ProductSlug = ({ params: { id, productSlug } }: productValidate) => {
  return (
    <>
      <section>
        <BreadCrumbs breadcrumbData={[{ name: "Home", url: "/", link: 1 }, { name: 'Komfort Pink High Back Wing Chair with Lamp', url: `${config.BASE_URL}/${productSlug}` }]} />
      </section>
      <section className="productDetail_wrapper">
        <div className="productDetail_container">
          <div className="productDetail_content">
            <div className="productDetail_body">
              <div className="productDetail_relative">
                <div className="productDetail_imgs">
                  <div className="productDetail_row">
                    <div className="modal_larg_img">
                      <img src={"https://storeassets.im-cdn.com/temp/cuploads/ap-south-1:d25873a9-7f29-4eb8-bd4c-39a1c550bca4/store4imojohome2/products/1629794052687Cover_0x0_webp.jpg"} alt='main-img'></img>
                    </div>
                    <div className="modal_sel_img">
                      <ul>
                        <li>
                          <img src={"https://storeassets.im-cdn.com/temp/cuploads/ap-south-1:d25873a9-7f29-4eb8-bd4c-39a1c550bca4/store4imojohome2/products/1629794052687Cover_0x0_webp.jpg"} alt="sub-img" />
                        </li>
                        <li>
                          <img src={"https://storeassets.im-cdn.com/temp/cuploads/ap-south-1:d25873a9-7f29-4eb8-bd4c-39a1c550bca4/store4imojohome2/products/1629794052687Cover_0x0_webp.jpg"} alt="sub-img" />
                        </li>
                        <li>
                          <img src={"https://storeassets.im-cdn.com/temp/cuploads/ap-south-1:d25873a9-7f29-4eb8-bd4c-39a1c550bca4/store4imojohome2/products/1629794052687Cover_0x0_webp.jpg"} alt="sub-img" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="modal_content">
                  <div className="modal_content_body">
                    <h2>""</h2>
                    <div className="modal_card">
                      <div className="modal_tax">
                        <h2>₹40000</h2>
                        <p>₹20000</p>
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
      </section >
    </>
  )
}

export default ProductSlug
