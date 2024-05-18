import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SectionSalesResult from './section-sales-result';

const  Container = styled.section`
    display: flex;
    gap: 2px;
    width: 90%;
`;

const  SectionResultsLeft = styled.article`
    width: 50%;
    background-color: #FFFFFF;
    padding: 20px;
    border-bottom-left-radius: 10px;
`;

const  SectionResultsRight = styled.article`
    width: 50%;
    background-color: #FFFFFF;
    padding: 20px;
    border-bottom-right-radius: 10px;
`;

const SectionContainerResult = ({uploads, linesSaved}) => {
    return (
        <Container>
            <SectionResultsLeft>
                <SectionSalesResult data={uploads} title='upload success' />
            </SectionResultsLeft>
            <SectionResultsRight>
                <SectionSalesResult data={linesSaved} title='lines saved' />
            </SectionResultsRight>
        </Container>
    );
};


SectionContainerResult.propTypes = {
    uploads: PropTypes.number.isRequired,
    linesSaved: PropTypes.number.isRequired
};

export default SectionContainerResult;
