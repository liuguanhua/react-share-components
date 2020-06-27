import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ReactShareComponents from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ReactShareComponents />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
