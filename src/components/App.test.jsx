import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import App from './App';

describe('App component', () => {
  it('should update on click', () => {
    const changeScore = jest.fn();
    const app = render(<App onClick={changeScore}/>);
    const handleClick = jest.spyOn(React, 'useState');
    handleClick.mockImplementation((score) => [score, changeScore]);

    app.simulate('click');
    expect(changeSize).toBeCalled();
  });
});
