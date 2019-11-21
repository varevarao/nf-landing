import styled, { css } from 'styled-components';

export const DisplayText = styled.span`
    /* Size */
    ${props => {
        switch (props.size) {
            case 'inherit': return css`font-size: inherit;`;
            case 'xsmall': return css`font-size: .675rem;`;
            case 'small': return css`font-size: 0.75rem;`;
            case 'medium': return css`font-size: 1rem;`;
            case 'large': return css`font-size: 1.2rem;`;
            case 'xlarge': return css`font-size: 2rem;`;
            case 'xxlarge': return css`font-size: 3rem;`;
            default:
                return css`font-size: 1rem;`;
        }
    }}

    /* Weight */
    ${props => {
        switch (props.variant) {
            case 'inherit': return css`font-weight: inherit;`;
            case 'strong': return css`font-weight: 600;`;
            case 'subdued': return css`font-weight: 200;`;
            case 'regular': default:
                return css`font-weight: 400;`;
        }
    }}

    /* Styles */
    ${props => {
        switch (props.styled) {
            case 'italic': return css`font-style: italic;`;
            default:
                return '';
        }
    }}

    /* Color */
    ${props => {
        switch (props.color) {
            case 'inherit': return css`color: inherit;`;
            case 'light': return css`color: #747474;`;
            case 'primary': return css`color: #ffb900;`;
            case 'secondary': return css`color: #4a4a4a;`;
            default:
                return css`color: ${typeof props.color === 'string' ? props.color : 'black'};`;
        }
    }}
`;