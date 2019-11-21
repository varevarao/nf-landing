import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import styled, { css } from 'styled-components';
import ActionButton from './action-button';
import Arrow from './arrow';
import { DisplayText } from './display-text';
import breakpoint from 'styled-components-breakpoint';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    align-items: center;
    justify-content: center;
`;

const SwipeArea = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SwipeContainer = styled(SwipeableViews)`
    width: 100%;
`;

const Dots = styled.div`
    display: flex;
    justify-content: center;

    width: 100%;
    height: 1rem;

    margin-bottom: 1rem;
    ${breakpoint('sm')`
        margin-bottom: 0.5rem;
    `}
`;

const Dot = styled.div`
    cursor: pointer;

    width: 5px;
    height: 5px;
    
    margin: 3px;
    border-radius: 50%;

    background-color: white;
    opacity: ${props => props.active ? 1 : 0.4};
`;

const Actions = styled.div`
    display: flex;
    justify-content: center;
`;

const SwipeArrow = styled(Arrow)`
    ${props => props.isHidden && css`
        visibility: hidden;
    `}
`

const QuoteImage = styled.img`
    clip-path: circle();
    width: 10rem;

    ${breakpoint('md')`
        width: 6rem;
    `}
`;

const Testimonial = styled.div`
    display: flex;
    flex-direction: column;

    text-align: center;
    overflow: visible;

    >* {
        margin-bottom: 1rem;
    }

    >:last-child {
        margin-bottom: 0.5rem;
    }

    .content-area {
        display: flex;
        justify-content: space-between;
        align-items: center;

        margin-bottom: 2rem;

        >span {
            width: 75%;
        }
    }
`;

const SwipeableCards = ({ className, items, action, onAction }) => {
    const [active, setActive] = React.useState(0);
    const totalElements = items.length;

    return (
        <Container className={className}>
            <SwipeArea>
                <SwipeContainer
                    index={active}
                    onChangeIndex={index => setActive(index)}
                    enableMouseEvents={true}
                >
                    {items.map((quote, index) => (
                        <Testimonial key={`career-test-${index}`}>
                            <div>
                                <QuoteImage src={quote.image} />
                            </div>
                            <div className="content-area">
                                <SwipeArrow isHidden={active <= 0} bg={true} onClick={() => setActive(active - 1)} />
                                <DisplayText size="medium" styled="italic" color="white">
                                    {quote.desc}
                                </DisplayText>
                                <SwipeArrow direction="right" isHidden={active >= (totalElements - 1)} bg={true} onClick={() => setActive(active + 1)} />
                            </div>

                            <DisplayText size="small" styled="italic" color="white">
                                {quote.name} . {quote.designation}
                            </DisplayText>
                        </Testimonial>
                    ))}
                </SwipeContainer>
            </SwipeArea>
            <Dots>
                {[...new Array(totalElements)].map((r, index) => (
                    <Dot key={`test-dot-${index}`} active={index === active} onClick={() => setActive(index)} />
                ))}
            </Dots>
            <Actions>
                {action ? (
                    <ActionButton onClick={onAction} color="white">
                        <DisplayText size="small" variant="inherit" color="#4a4a4a">
                            {action}
                        </DisplayText>
                    </ActionButton>
                ) : null}
            </Actions>
        </Container>
    )
}

export default SwipeableCards
