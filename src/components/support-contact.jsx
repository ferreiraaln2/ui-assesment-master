import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SupportDetails from './support-contact-detail';

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  padding: 5% 5% 0 5%;
  animation: fadeIn 1.5s ease-in-out;
`;

const NavContainer = styled.nav`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 5% 5% 0 5%;

    @media (max-width: 768px) {
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`;

const OverviewTitle = styled.h1`
    color: #606060;
    font-weight: 400;
    font-size: 2.5rem;

    @media (max-width: 992px) {
      font-size: 2rem;
    }

    @media (max-width: 768px) {
      width: 100%;
      text-align: center;
    }
`;

const SupportItem = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-left: 20px;
`;

const SupportText = styled.p`
    margin: 0;
    text-transform: uppercase;
    font-weight: 600;
    color: #9C9999;
    font-size: 1.3em;
`;

const SupportContact = ({contact}) => {
    return (
      <Container>
        <NavContainer>
          <div className="container__nav__overview">
              <OverviewTitle>Account Overview</OverviewTitle>
          </div>
          <div className="container__nav__support">
              <SupportItem>
                  <SupportText>your Feefo support contact</SupportText>
              </SupportItem>
              <SupportDetails contact={contact} />
          </div>
        </NavContainer>
      </Container>
    );
};

SupportContact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default SupportContact;
