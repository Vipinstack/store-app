import React from 'react'
import '../../styles/Footer.css';

const Footer = () => {
    return (
        <>
            <section className="footer_wrapper">
                <div className="footer_container">
                    <div className="footer_grid_wrapper">
                        <div className="footer_grid">
                            <div><a href='/'><img className="footer_logo" src='https://storeassets.im-cdn.com/logos/342511/logo_1629774023_0x0_webp.PNG' alt=''></img></a></div>
                            <div className="footer_menu">
                                <div className="footer_title">Menu</div>
                                <a href=''>Privacy</a>
                                <a href=''>Terms & Conditions</a>
                                <a href=''>Contact Us</a>
                                <a href=''>About Us</a>
                                <a href=''>FAQs</a>
                            </div>
                            <div className="footer_menu">
                                <div className="footer_title">Account</div>
                                <a href=''>Track Order</a>
                                <a href=''>Cancellation & Refund</a>
                                <a href=''>Shipping & Delivery</a>
                            </div>
                            <div className="footer_menu">
                                <div className="footer_title">Company</div>
                                <a href=''>India Today Group in Noida Sector 16a, Noida, Delhi</a>
                                <a href=''>Plot Number Fc-8, Near Sun City, Film City, Sector 16a-201301.</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer
