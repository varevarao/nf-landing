import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import React from 'react';
import styled from 'styled-components';
import { DisplayText } from './display-text';

const SectionContainer = styled.section`
    width: 100%;
    text-align: center;

    .section-title, .section-subtitle {
        width: 100%;
        text-align: center;
    }

    .section-content {
        width: 100%;
    }
`;

const CenteredRow = styled(Row)`
    display: flex;
    justify-content: center;
`;

const SectionHeader = styled(CenteredRow)`
    padding-top: 2rem;
`;

const SectionSubheader = styled(CenteredRow)`
    padding-top: 1rem;
`;

const Section = ({ className, title, subtitle, children }) => (
    <SectionContainer className={className}>
        <Container>
            <SectionHeader>
                <Col xs="10" md="6">
                    <DisplayText color="secondary" size="large" variant="strong">{Array.isArray(title) ? title[0] : title}</DisplayText>
                    <DisplayText color="primary" size="large" variant="strong">{Array.isArray(title) ? title[1] : ''}</DisplayText>
                </Col>
            </SectionHeader>
            <SectionSubheader>
                {/* <Col xs="12" md="8"> */}
                <DisplayText color="light" size="xsmall">{subtitle}</DisplayText>
                {/* </Col> */}
            </SectionSubheader>
            <div className="section-content">
                {children}
            </div>
        </Container>
    </SectionContainer>
);

export default Section;