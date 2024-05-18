import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SectionContainerArticle from '../components/section-container-article';

jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: (props) => <i className={`fa ${props.icon}`} />
}));

describe('SectionContainerArticle', () => {
  it('renders the component with given props', () => {
    const { getByText } = render(<SectionContainerArticle successfulUploads={5} linesAttempted={100} />);

    expect(getByText('5 uploads')).toBeInTheDocument();
    expect(getByText('100 lines')).toBeInTheDocument();
  });

  it('calls console.log with successfulUploads', () => {
    console.log = jest.fn();
    render(<SectionContainerArticle successfulUploads={5} linesAttempted={100} />);
    expect(console.log).toHaveBeenCalledWith(5);
  });
});
