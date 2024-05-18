import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SupportDetails from '../components/support-contact-detail';

describe('SupportDetails', () => {
  const contact = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890'
  };

  it('should render the component', () => {
    render(<SupportDetails contact={contact} />);
    
    expect(screen.getByText('J')).toBeInTheDocument(); // Verify initial of the name
  });
});
