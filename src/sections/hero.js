import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { DisplayText } from '../components/display-text';
import Logo from '../components/logo';
import Container from 'muicss/lib/react/container';

const HeroContainer = styled.section`
    min-height: 90vh;
    ${breakpoint('sm')`
        min-height: 100vh;
    `}
    
    width: 100%;
    position: relative;
`;

const HeroContent = styled.div`
    padding-left: 1rem;
    padding-top: 1rem;

    ${breakpoint('md')`
        padding-left: 2rem;
        padding-top: 2rem;
    `}
    
    ${breakpoint('lg')`
        padding-left: 3rem;
        padding-top: 3rem;
    `}
    
    ${breakpoint('xl')`
        padding-left: 5rem;
        // padding-top: 5rem;
    `}
`;

const HeroBG = styled.div`
    position: fixed;
    top: 0;
    left: 0;

    z-index: -1;

    height: 100%;
    width: 100%;

    background-image: url('/img/nf-hero.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-blend-mode: darken;
    background-attachment: fixed;
`;

const HeroText = styled.div`
    margin-top: 5rem;
    ${breakpoint('lg')`
        margin-top: 7rem;
    `};
    
    ${breakpoint('xl')`
        margin-top: 10rem;
    `};
    
    display: flex;
    flex-direction: column;

    span {
        line-height: 3rem;
    }

    max-width: 85%;
    ${breakpoint('md')`
        max-width: 55%;
    `};

    .subtext {
        margin-top: 2rem;
        line-height: 1.3rem;
    }
`;

const HeroWave = styled.img`
    position: absolute;
    bottom: -1px;
    width: 100%;
    height: auto;
`;

const HeroSection = ({ ...props }) => {
    return (
        <HeroContainer {...props}>
            <HeroBG />
            <HeroContent>
                <Logo />
                <HeroText>
                    <DisplayText size="xxlarge" color="white">Simplifying the digital journey </DisplayText>
                    <DisplayText size="xxlarge" color="primary">of every business in India.</DisplayText>
                    <DisplayText className="subtext" size="small" color="white">All users on Boost know that there are millions of people out there. Every day besides so many people joining this community.</DisplayText>
                </HeroText>
            </HeroContent>
            <HeroWave src="/img/wave.svg" />
        </HeroContainer>
    )
}

export default HeroSection
