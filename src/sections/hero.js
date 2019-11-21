import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { DisplayText } from '../components/display-text';
import Logo from '../components/logo';

const HeroContainer = styled.section`
    min-height: 100vh;
    width: 100%;
    position: relative;

    background-image: url('/img/nf-hero.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-blend-mode: darken;
    background-attachment: fixed;
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
        padding-top: 5rem;
    `}
`;

const HeroText = styled.div`
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
`;

const HeroWave = styled.img`
    position: absolute;
    bottom: -2px;
    width: 100%;
`;

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroContent>
                <Logo />
                <HeroText>
                    <DisplayText size="xxlarge" color="white" styled="italic" variant="strong">Simplifying the digital journey </DisplayText>
                    <DisplayText size="xxlarge" color="primary" styled="italic" variant="strong">of every business in India.</DisplayText>
                    <DisplayText size="small" color="white">All users on Boost know that there are millions of people out there. Every day besides so many people joining this community.</DisplayText>
                </HeroText>
            </HeroContent>
            <HeroWave src="/img/wave.png" />
        </HeroContainer>
    )
}

export default HeroSection
