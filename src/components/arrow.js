import React from 'react';
import styled, { css } from 'styled-components';

const ArrowOnly = styled.div`
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;

    display: inline-flex;
    cursor: pointer;

    border-right: 5px solid ${props => props.color ? props.color : '#9b9b9b'};
    transform: rotate(${props => props.rotation}deg);
`;

const ArrowBG = styled.div`
    width: 2rem;
    height: 2rem;
    background-color: ${props => typeof props.bg === 'string' ? props.bg : 'white'};
    border-radius: 50%;

    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const Arrow = ({ bg, direction, color, ...props }) => {
    const rotation = direction === 'right' ? 180 : direction === 'up' ? 90 : direction === 'down' ? -90 : 0;
    return !!bg ? (
        <ArrowBG {...props}>
            <ArrowOnly color={color} rotation={rotation} />
        </ArrowBG>
    ) : (
            <ArrowOnly color={color} {...props} rotation={rotation} />
        )
}

export default Arrow;