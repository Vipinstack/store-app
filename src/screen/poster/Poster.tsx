import React from 'react';
import '../../styles/poster.css';
import { cabin } from '@/component/font';


const Poster = () => {
    return (
        <section className="poster-wrapper">
            <div className="poster-container">
                <div className="poster-inner-container">
                    <div className="poster-img">
                        <img src="https://storeassets.im-cdn.com/media-manager/store4imojo-grace/AKd1oePQ6aX7pEbsPTwH_Untitled%20design%20(57)_1440x1080_webp.png" alt="poster-img"></img>
                    </div>
                    <div className="poster-desc">
                        <h2>Komfort Bamboo Outdoor Table & Chair Set</h2>
                        <p>Cane chair with seat cushion model. Handicraft, beautifully designed cane chair used in art-loving households and establishments. Gives an aesthetic look and reflects the combination of traditional elegance and contemporary convenience. Features: looking, lightweight, eco-friendly, and handicraft work of specialized rural artisans.</p>
                        <div className="btn-container">
                            <p>Shop Now</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Poster