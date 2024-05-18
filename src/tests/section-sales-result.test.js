import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SectionSalesResult from '../components/section-sales-result';

describe('SectionSalesResult', () => {
    test('renders correctly with given data and title', () => {
        const data = 85;
        const title = "Sales Growth";

        render(<SectionSalesResult data={data} title={title} />);

        const dataElement = screen.getByText(/85%/i);
        const titleElement = screen.getByText(/Sales Growth/i);

        expect(dataElement).toBeInTheDocument();
        expect(titleElement).toBeInTheDocument();
    });

    test('applies correct styles', () => {
        const data = 85;
        const title = "Sales Growth";

        render(<SectionSalesResult data={data} title={title} />);

        const dataElement = screen.getByText(/85%/i);
        const titleElement = screen.getByText(/Sales Growth/i);

        expect(dataElement).toHaveStyle('font-size: xxx-large; font-weight: bold; color: #60AD55');
        expect(titleElement).toHaveStyle('text-transform: uppercase; font-weight: 600; color: #9C9999; font-size: 1.0em');
    });
});
