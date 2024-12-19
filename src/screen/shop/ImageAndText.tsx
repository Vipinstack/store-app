import React from 'react'
import '../../styles/ImageAndText.css';

const ImageAndText = () => {
    return (
        <section className="image_text_wrapper">
            <div className="image_text_container">
                <div className="grid_container">
                    <div className="text_sectionHeading">
                        <h2>Komfort Wing Chair</h2>
                        <p>Keep your home effortlessly classic with wing chairs.</p>
                        <div className="btn_sectionHeading">
                            <a href="#" className="">
                                Shop Now
                            </a>
                        </div>
                    </div>
                    <div className="img1_sectionHeading">
                        <img src='https://storeassets.im-cdn.com/media-manager/store4imojo-grace/3eFwaPCyTTG0OuXY0mMz_Untitled%20design%20(81)_720x720_webp.png' alt='img'>
                        </img>
                    </div>
                    <div className="img2_sectionHeading">
                        <img src='https://storeassets.im-cdn.com/media-manager/store4imojo-grace/KzMuNE7uQDmMJYZufO7f_Untitled%20design%20(80)_720x720_webp.png' alt='img'>
                        </img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ImageAndText
