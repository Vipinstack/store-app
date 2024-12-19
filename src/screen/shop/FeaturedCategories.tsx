import React from 'react'
import '../../styles/FeaturedCategories.css';

const FeaturedCategories = () => {
    return (
        <>
            <section className="FeaturedCategories_wrapper">
                <div className="FeaturedCategories_container">
                    <div className="categories_card_row">
                        <div className="card_wrap">
                            <a href="" className="zoomIn FeaturedCategories">
                                <div className="category_card">
                                    <div className="category_text">
                                        <h3>Komfort Outdoors</h3>
                                        <div className="category_text_btn">Shop Now</div>
                                    </div>
                                    <div className="category_img">
                                        <img className="transform" src='https://storeassets.im-cdn.com/temp/cuploads/ap-south-1:d25873a9-7f29-4eb8-bd4c-39a1c550bca4/store4imojohome2/category/16297939855165223332_0x0_webp.jpg' alt='' />
                                    </div>
                                </div>
                            </a>
                            <a href="" className="zoomIn FeaturedCategories">
                                <div className="category_card">
                                    <div className="category_text">
                                        <h3>Komfort Tables</h3>
                                        <div className="category_text_btn">Shop Now</div>
                                    </div>
                                    <div className="category_img">
                                        <img className="transform" src='https://storeassets.im-cdn.com/temp/cuploads/ap-south-1:d25873a9-7f29-4eb8-bd4c-39a1c550bca4/store4imojohome2/category/16297939608094_0x0_webp.jpg' alt='' />
                                    </div>
                                </div>
                            </a>
                            <a href="" className="zoomIn FeaturedCategories">
                                <div className="category_card">
                                    <div className="category_text">
                                        <h3>Komfort Wing Chairs</h3>
                                        <div className="category_text_btn">Shop Now</div>
                                    </div>
                                    <div className="category_img">
                                        <img className="transform" src='https://storeassets.im-cdn.com/temp/cuploads/ap-south-1:d25873a9-7f29-4eb8-bd4c-39a1c550bca4/store4imojohome2/category/16297968497375223329_0x0_webp.jpg' alt='' />
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FeaturedCategories
