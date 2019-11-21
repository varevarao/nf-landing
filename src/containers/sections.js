import React from 'react'
import HeroSection from '../sections/hero'
import ProductsSection from '../sections/products'
import SolutionsSection from '../sections/solutions'
import CareersSection from '../sections/careers'
import FooterSection from '../sections/footer'
import { Divider } from '../components/divider'

const Sections = () => {
    return (
        <>
            {/* Landing */}
            <HeroSection />

            {/* Main products */}
            <ProductsSection />

            {/* Technologies backing the main products */}
            <SolutionsSection />

            <Divider />

            {/* Jobs! */}
            <CareersSection />

            {/* Web footer */}
            <FooterSection />
        </>
    )
}

export default Sections
