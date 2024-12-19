import React from 'react'
import '../../styles/TrustBanner.css';

const TrustBanner = () => {
    return (
        <>
            <section className="trustBanner_wrapper">
                <div className="trustBanner_container">
                    <div className="icon_container">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M15.2 11.467H8.8v4.266h6.4v-4.266zM9.867 11.467V9.333A2.134 2.134 0 0112 7.2v0a2.133 2.133 0 012.133 2.133v2.134" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.4 13.6a6.4 6.4 0 11-12.8 0V5.067L12 4l6.4 1.067V13.6z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </div>
                        <div>
                            Secure Payments
                        </div>
                    </div>
                    <div className="icon_container">
                        <div>
                            <svg width="36" height="36" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 17.664H22V11.56l-3.286-.94-1.878-5.164H9.15v12.207" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="14.019" cy="17.195" r="2.347" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></circle><path d="M12.61 7.336v3.756h3.756" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.39 5.457H2M6.449 9.86H3.368M6.449 14.258h-1.32" stroke="currentColor" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"></path></svg>
                        </div>
                        <div>
                            Shipping in India
                        </div>
                    </div>
                    <div className="icon_container">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="text-label"><path d="M9.333 19.733h8a1.885 1.885 0 001.867-1.6l.8-6.4a1.572 1.572 0 00-1.6-1.6h-4.8V7.755a4.836 4.836 0 00-1.412-3.21 1.07 1.07 0 00-1.788.788v3.2l-3.2 3.734" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"></path><path d="M7.2 10.667H4v9.066h3.2v-9.066z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"></path></svg>
                        </div>
                        <div>
                            Great Value & Quality
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TrustBanner
