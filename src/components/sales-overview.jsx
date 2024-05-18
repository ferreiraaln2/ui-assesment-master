import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SectionContainerArticle from './section-container-article';
import SectionContainerResult from './sales-container-result';

const MainContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 2px;
    align-items: center;
    justify-content: space-around;
    position: relative;
    padding: 5%;
    animation: fadeIn 1.5s ease-in-out;

    @media (max-width: 768px) {
        padding: 10% 0 5% 0 !important
    }
`;

const SalesOverview = ({sale}) => {
    return (
        <MainContainer>
            <SectionContainerArticle successfulUploads={sale.successfulUploads} linesAttempted={sale.linesAttempted} />
            <SectionContainerResult uploads={sale.uploads} linesSaved={sale.linesSaved} />
        </MainContainer>
    );
};

SalesOverview.propTypes = {
    sale: PropTypes.object.isRequired
};

export default SalesOverview;
