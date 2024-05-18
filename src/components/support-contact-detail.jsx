import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SupportContactInfo from './support-contact-info';

const Container = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: center;

    @media (max-width: 768px) {
      flex-wrap: nowrap;
      flex-direction: column;
      align-items: center;
    }
`;

const SupportImage = styled.div`
    background: #F7CE11;
    padding: 20px 30px;
    border-radius: 10px;
    font-size: 25px;
    font-weight: bold;
    margin: 20px;
`;

const SupportDetails = ({contact}) => {
    const getFirstCharacter = (name) => {
      return name ? name.charAt(0) : '';
    };
    return (
        <Container>
            <SupportImage>{getFirstCharacter(contact.name)}</SupportImage>
            <SupportContactInfo name={contact.name} email={contact.email} phone={contact.phone} />
        </Container>
    );
};

SupportDetails.propTypes = {
  contact: PropTypes.object.isRequired
};

export default SupportDetails;
