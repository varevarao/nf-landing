import styled from 'styled-components';
import { DisplayText } from './display-text';
import breakpoint from 'styled-components-breakpoint';

const Card = styled.div`
    height: 20rem;
    width: 20rem;
    
    ${breakpoint('sm')`
        height: 20rem;
        width: 20rem;
    `}

    border-radius: 10px;
    box-shadow: 0 5px 23px 0 rgba(255, 185, 0, 0.2);
    background-color: #ffffff;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const CardImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 100%;
    height: 50%;

    padding: 1rem;

    >img {
        width: 50%;
        object-fit: contain;
    }
`;

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: calc(100% - 1rem);
    height: 50%;

    padding: 1rem;

    text-align: center;
`;

export const CardTitle = styled(DisplayText)`
    
`;

export const CardDesc = styled(DisplayText)`
    margin-top: 1rem;
    padding: 0 1rem;
`;

export const CardActions = styled.div`
    margin-top: 2rem;
    
    display: flex;
    justify-content: center;
`;

export default Card
