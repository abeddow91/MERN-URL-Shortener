import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import {shallow, mount} from 'enzyme';
import toJson from 'enzyme-to-json';

import UrlForm from '../components/UrlForm';

//This test mounts a component and checks that it doesn't throw an exception during rendering.

    it('renders without crashing', () => {
      mount(<UrlForm />);
    });

  it('should render the Header', () => {
    const urlForm = shallow(<UrlForm />);
    const tree = toJson(urlForm);
    expect(tree).toMatchSnapshot()
  });
