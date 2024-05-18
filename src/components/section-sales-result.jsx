import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const  Container = styled.div`
    float:left;
`;

const  SectionResultsContainerText = styled.p`
    font-size: xxx-large;
    margin: 0;
    font-weight: bold;
    color: #60AD55;
`;

const  SectionResultsContainerSpan = styled.span`
    margin: 0;
    text-transform: uppercase;
    font-weight: 600;
    color: #9C9999;
    font-size: 1.3em;
    font-size: 1.0em;
`;

const SectionSalesResult = ({data, title}) => {
    return (
        <Container> 
            <SectionResultsContainerText>
                {data}%
            </SectionResultsContainerText>
            <SectionResultsContainerSpan>
                {title}
            </SectionResultsContainerSpan>
        </Container>
    );
};

SectionSalesResult.propTypes = {
    data: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
};

export default SectionSalesResult;
