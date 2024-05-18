import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AccountOverview from '../components/account-overview';

// Mocking the child components
jest.mock('../components/support-contact', () => ({ contact }) => <div>SupportContact Mock: {contact}</div>);
jest.mock('../components/sales-overview', () => ({ sale }) => <div>SalesOverview Mock: {sale}</div>);

describe('AccountOverview', () => {
  const mockData = {
    supportContact: 'support@example.com',
    salesOverview: 'sales data',
  };

  it('renders the SupportContact component with the correct data', () => {
    const { getByText } = render(<AccountOverview data={mockData} />);
    expect(getByText(/SupportContact Mock:/)).toHaveTextContent('SupportContact Mock: support@example.com');
  });

  it('renders the SalesOverview component with the correct data', () => {
    const { getByText } = render(<AccountOverview data={mockData} />);
    expect(getByText(/SalesOverview Mock:/)).toHaveTextContent('SalesOverview Mock: sales data');
  });

  it('applies the correct class name', () => {
    const { container } = render(<AccountOverview data={mockData} />);
    expect(container.firstChild).toHaveClass('AccountOverview');
  });
});

