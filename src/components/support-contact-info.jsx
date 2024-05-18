import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const SupportTitle = styled.h4`
    margin: 0;
    font-size: 20px;
    font-weight: bold;
    color: #606060;

    @media (max-width: 768px) {
      text-align: center;
    }
`;

const SupportContactDiv = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    gap: 10px;
    height: 30px;

    @media (max-width: 992px) {
      flex-wrap: wrap;
    }

    @media (max-width: 768px) {
        justify-content: center;
    }
`;

const SupportEmail = styled.p`
    font-size: 20px;
    color: #797979;

    @media (max-width: 992px) {
      margin: 0;
    }
`;

const SupportPhone = styled.p`
    font-size: 20px;
    color: #797979;
    margin-left: 0.5em;

    @media (max-width: 992px) {
      margin: 0;
    }
`;

const SupportContactInfo = ({name, email, phone}) => {
    return (
        <Container>
            <SupportTitle>{name}</SupportTitle>
            <SupportContactDiv>
                <div>
                    <FontAwesomeIcon icon={faEnvelope} className='icon__mail' />
                </div>
                <SupportEmail>{email}</SupportEmail>
                <SupportPhone>{phone}</SupportPhone>
            </SupportContactDiv>
        </Container>
    );
};

SupportContactInfo.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
};

export default SupportContactInfo;
