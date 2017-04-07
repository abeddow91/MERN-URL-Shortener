import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import {shallow, mount} from 'enzyme';
import toJson from 'enzyme-to-json';

import Header from '../components/Header';

//This test mounts a component and checks that it doesn't throw an exception during rendering.

    it('renders without crashing', () => {
      mount(<Header />);
    });

  it('should render the Header', () => {
    const header = shallow(<Header />);
    const tree = toJson(header);
    expect(tree).toMatchSnapshot()
  });
