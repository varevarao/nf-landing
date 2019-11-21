import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Section from '../components/section-container';
import SwipeableCards from '../components/swipeable-cards';
import Content from '../data/careers.json';

const CareersContainer = styled(Section)`
    
`;

const Testimonials = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    min-height: 75vh;

    >* {
        position: absolute;
        margin-top: 3rem;
    }
`;

const CareerBG = styled.div`
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100%;

    background: url('/img/bitmap.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-blend-mode: darken;
`;

const QuoteContainer = styled.div`
    border-radius: 3rem;
    -webkit-backdrop-filter: blur(1.4rem);
    backdrop-filter: blur(1.4rem);
    background-color: rgba(0, 0, 0, 0.2);

    height: 38%;
    width: calc(100% - 1.5rem);

    ${breakpoint('sm')`
        height: 55%;
        width: calc(50% - 1.5rem);
    `}

    padding-top: 2.5rem;
`;

const CardsContainer = styled(SwipeableCards)`
    height: 75%;
    width: 100%;

    ${breakpoint('sm')`
        width: 50%;
    `}

    margin-top: 2.5rem;
`;

const CareersSection = () => {
    return (
        <CareersContainer title={["Do you love", " solving problems?"]} subtitle={"If the answer is ‘YES’, Just click on ‘Check opening’ Button below and see where you can fit in. NowFloats has been a exciting rolar-coaster ride so far & with you, we are hoping it to get even more exciting."}>
            <Testimonials>
                <CareerBG />
                <QuoteContainer />
                <CardsContainer items={Content.testimonials} action="Check Openings">

                </CardsContainer>
            </Testimonials>
        </CareersContainer>
    )
}

export default CareersSection
