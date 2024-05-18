import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Container  = styled.section`
    width: 90%;
`;

const SectionArticle = styled.article`
    background-color: #FFFFFF;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;

const SectionArticleContainer = styled.div`
    padding: 30px;
`;

const SectionHeader = styled.header`
    display: flex;
    justify-content: space-between;
    height: 40px;
`;

const SectionHeaderDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const  SectionHeadertitle = styled.h2`
    color: #373737;
`;

const  SectionFooter = styled.footer`
    text-align: left;
`;

const  SectionFooterText = styled.p`
    font-size: 20px;
    margin-bottom: 0.5em;
    color: #797979;
`;

const  SectionFooterTextSpan = styled.span`
    font-weight: bold;
    color: #606060;
`;


const SectionContainerArticle = ({successfulUploads, linesAttempted}) => {
    return (
        <Container >
            <SectionArticle>
                <SectionArticleContainer>
                    <SectionHeader>
                        <SectionHeaderDiv>
                            <div>
                                <FontAwesomeIcon icon={faUpload} className='icon__sales' />
                            </div>
                            <SectionHeadertitle>Sales</SectionHeadertitle>
                        </SectionHeaderDiv>
                        <div>
                            <div>
                                <FontAwesomeIcon icon={faInfoCircle} className='icon__info' />
                            </div>
                        </div>
                    </SectionHeader>
                    <SectionFooter>
                        <SectionFooterText>
                            You had <SectionFooterTextSpan>{successfulUploads} uploads </SectionFooterTextSpan> and 
                            <SectionFooterTextSpan> {linesAttempted} lines </SectionFooterTextSpan> added.
                        </SectionFooterText>
                    </SectionFooter>
                </SectionArticleContainer>
            </SectionArticle>
        </Container>
    );
};

SectionContainerArticle.propTypes = {
    successfulUploads: PropTypes.number.isRequired,
    linesAttempted: PropTypes.number.isRequired,
};

export default SectionContainerArticle;
