import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SupportContactInfo from '../components/support-contact-info';

// Mock do FontAwesomeIcon to avoid rendering problems
jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: () => <div data-testid="icon__mail"></div>
}));

describe('SupportContactInfo', () => {
  const name = 'Support Team';
  const email = 'support@example.com';
  const phone = '+123456789';

  it('renders without crashing', () => {
    const { getByText, getByTestId } = render(
      <SupportContactInfo name={name} email={email} phone={phone} />
    );

    expect(getByText(name)).toBeInTheDocument();
    expect(getByText(email)).toBeInTheDocument();
    expect(getByText(phone)).toBeInTheDocument();
    expect(getByTestId('icon__mail')).toBeInTheDocument();
  });

  it('renders the correct content', () => {
    const { getByText } = render(
      <SupportContactInfo name={name} email={email} phone={phone} />
    );

    const titleElement = getByText(name);
    const emailElement = getByText(email);
    const phoneElement = getByText(phone);

    expect(titleElement).toHaveTextContent(name);
    expect(emailElement).toHaveTextContent(email);
    expect(phoneElement).toHaveTextContent(phone);
  });
});