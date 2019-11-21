import Col from 'muicss/lib/react/col';
import Row from 'muicss/lib/react/row';
import React from 'react';
import styled, { css } from 'styled-components';
import { DisplayText } from '../components/display-text';
import Section from '../components/section-container';
import Content from '../data/solutions.json';
import Arrow from '../components/arrow';

const SolutionsContainer = styled(Section)`
    .split-view {
        align-items: stretch;
    }
`;

const SolutionList = styled(Row)`
    margin-top: 3rem;
    margin-bottom: 3rem;
`;

const SolutionContent = styled.div`
    margin-bottom: 2rem;
    
    display: flex;
    flex-direction: column;
    text-align: left;

    cursor: pointer;

    .title, .desc {
        color: #9b9b9b;
    }

    ${props => props.selected && css`
        .title {
            color: #6797d1;
        }

        .desc {
            color: #2a2a2a;
        }
    `}
`;

const SolutionImage = styled.img`
    width: 100%;
`;

const SolutionsSection = () => {
    const [selected, setSelected] = React.useState(0);

    return (
        <SolutionsContainer title={["Solutions lead by", " innovation"]} subtitle={"With our patented technologies*, we have built some cool li’l products which currently touches upon thousands of users, daily."}>
            <SolutionList className="split-view">
                <Col xs={12} md={6}>
                    {Content.list.map((sol, index) => (
                        <SolutionContent key={`kit-sol-content-${index}`} onClick={() => setSelected(index)} selected={selected === index}>
                            <DisplayText className="title" variant="strong">
                                {selected === index ? <Arrow color="#6797d1" direction="right" /> : null} {sol.title}
                            </DisplayText>
                            <DisplayText className="desc">
                                {sol.desc}
                            </DisplayText>
                        </SolutionContent>
                    ))}
                </Col>
                <Col md={6}>
                    {Content.list.map((sol, index) => selected === index ? (
                        <SolutionImage key={`kit-sol-img-${index}`} src={sol.image} />
                    ) : null)}
                </Col>
            </SolutionList>
        </SolutionsContainer>
    )
}

export default SolutionsSection
