import React from 'react'
import Poster from '@/screen/poster/Poster'
import FeatureProduct from '@/screen/products/featureProduct'
import BrainhubCarousel from '@/screen/silder/BrainhubCarousel'
import ImageAndText from '@/screen/shop/ImageAndText'
import FeaturedCategories from '@/screen/shop/FeaturedCategories'
import About from '@/screen/about/About'
import AllProduct from '@/screen/products/AllProduct'
import TrustBanner from '@/screen/poster/TrustBanner'

const page = () => {
  return (
    <>
        <Poster />
        <FeatureProduct />
        <BrainhubCarousel />
        <ImageAndText />
        <FeaturedCategories />
        <About />
        <AllProduct />
        <TrustBanner />
    </>
  )
}

export default page
