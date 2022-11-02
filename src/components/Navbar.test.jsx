import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import Navbar from './Navbar';

describe('Navbar component', () => {
  it('renders correctly', () => {
    render(<Navbar />);
    expect(screen.getByText('Where is Waldo')).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});
