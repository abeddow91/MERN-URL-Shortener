import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

import App from '../components/App';

describe('render', () =>{
  it('should render the app', () => {
    const app = shallow(<App />);
    const tree = toJson(app);
    expect(tree).toMatchSnapshot();
  });
});
