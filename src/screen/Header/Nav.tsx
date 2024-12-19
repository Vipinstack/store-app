"use client"
import React, { useState } from 'react'
import '../../styles/navBar.css';
import { cabin } from '../../component/font';

const Nav = () => {
  const [isShopHovered, setIsShopHovered] = useState<boolean>(false);
  const [isMoreHovered, setIsMoreHovered] = useState<boolean>(false);
  const [isInpVal, setIsInpData] = useState<any>('');
  const [isDark, setIsDark] = useState<boolean>(false);

  const SearchFrn = (e: any) => {
    setIsInpData(e.target.value)
  }

  return (
    <>
      <section className='wrapper'>
        <div className="container">
          {isDark && <div className="bg-pageHeader-veryDarkGray" id="darkGray"></div>}
          <div className="inner-contaner">
            <div className="logo-container">
              <div className='logo'>
                <a href='/'>
                  <img src='https://storeassets.im-cdn.com/logos/342511/logo_1629774023_0x0_webp.PNG' width={48} height={48} />
                </a>
              </div>
              <div className='nav'>
                <div><a href="/" className={`${cabin.className} home-link`}>Home</a></div>
                <div className='shop-container'
                  onMouseEnter={() => setIsShopHovered(true)}
                  onMouseLeave={() => setIsShopHovered(false)}>
                  <a className={`${cabin.className} shop-link`}>Shop
                    <img src='https://static.im-cdn.com/mjc/storefront/Grace/static/media/LChevron.323f2f27.svg' />
                  </a>
                  {isShopHovered && (<div className='all-shop' onMouseEnter={() => setIsShopHovered(true)}
                    onMouseLeave={() => setIsShopHovered(false)}>
                    <div className='show-inner'>
                      <div className='main-container'>
                        <div className={`${cabin.className} common`}><a href=''>Komfort Outdoors</a></div>
                        <div className={`${cabin.className} common`}><a href=''>komfort Outdoors</a></div>
                        <div className={`${cabin.className} common`}><a href=''>komfort Wing chairs</a></div>
                        <div className={`${cabin.className} common`}><a href=''>komfort Sofa</a></div>
                        <div className={`${cabin.className} common`}><a href=''>Shop All</a></div>
                      </div>
                    </div>
                  </div>
                  )}
                </div>
                <div className='more' onMouseEnter={() => setIsMoreHovered(true)}
                  onMouseLeave={() => setIsMoreHovered(false)}>
                  <a className={`${cabin.className} more-link`}>More
                    <img src='https://static.im-cdn.com/mjc/storefront/Grace/static/media/LChevron.323f2f27.svg' />
                  </a>
                </div>
                {isMoreHovered && (
                  <div className='show-more' onMouseEnter={() => setIsMoreHovered(true)}
                    onMouseLeave={() => setIsMoreHovered(false)}>
                    <div className='show-inner'>
                      <div className='main-container'>
                        <div className={`${cabin.className} common`}><a href=''>About</a></div>
                        <div className={`${cabin.className} common`}><a href=''>Contact Us</a></div>
                        <div className={`${cabin.className} common`}><a href=''>FAQs</a></div>
                        <div className={`${cabin.className} common`}><a href=''></a></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className='search-container'
              style={{
                zIndex: isDark ? '999' : "",
              }}
            >
              <input placeholder='Search' onChange={SearchFrn} onClick={() => setIsDark(!isDark)} />
              <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-search-256.png" width={17} height={17} />
            </div>
            <div className='cart-container'>
              <div><a className={`${cabin.className} trackOder-link`}>Track Order</a></div>
              <div><a className={`${cabin.className} singup-link`}>Sing in</a></div>
              <div className='cart-link'>
                <img src='https://static.im-cdn.com/mjc/storefront/Grace/static/media/LCart.ca87625d.svg' width={23} height={23} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Nav
