import Col from 'muicss/lib/react/col';
import Row from 'muicss/lib/react/row';
import React from 'react';
import styled from 'styled-components';
import ProductCard from '../components/product-card';
import Section from '../components/section-container';

const ProductsContainer = styled(Section)`
    background: linear-gradient(to bottom, #ffffff, #f0f0f0);

    .cards {
        margin-top: 1rem;

        >* {
            margin: 2rem 0;
            padding: 0;
        }
    }
`;

const CenteredCol = styled(Col)`
    display: flex;
    justify-content: center;
`;

const ProductsSection = ({ ...props }) => {
    return (
        <ProductsContainer
            title={["Take full control", " of your business"]}
            subtitle={"We help you do everything you need from setting up your business’ digital identity, pushing it to multiple channels, to managing it across, scaling it’s reach via cloud for entriprise level growth. Just pick the one from below which suites your business needs."}
            {...props}
        >
            <Row className="cards">
                <CenteredCol xs={12} md={6}>
                    <ProductCard
                        image="/img/boost-logo.png"
                        title="For small & medium businesses"
                        desc="from setting up your business’ digital identity, pushing it to multiple channels, to managing it across."
                        primary="primary"
                        action="Check Boost"
                        onClick={() => window.location = 'https://nowfloats.com/boost'}
                    />
                </CenteredCol>
                <CenteredCol xs={12} md={6}>
                    <ProductCard
                        image="/img/kitsune-logo.png"
                        title="For larger enterprises"
                        desc="from setting up your business’ digital identity, pushing it to multiple channels, to managing it across."
                        primary="#f06428"
                        action="Check Kitsune"
                        onClick={() => window.location = 'https://getkitsune.com'}
                    />
                </CenteredCol>
            </Row>
        </ProductsContainer>
    )
}

export default ProductsSection
