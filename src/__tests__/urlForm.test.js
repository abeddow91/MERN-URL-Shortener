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

it("it renders with expected state", () => {
  const testDoc = ReactTestUtils.renderIntoDocument(<UrlForm />);
  expect(testDoc.state.longUrl).toBe("");
  expect(testDoc.state.shortUrl).toBe("");
  expect(testDoc.state.shortId).toBe(0);
});

it("it stores the users input", () => {
  const testDoc = ReactTestUtils.renderIntoDocument(<UrlForm />);
  const input = ReactTestUtils.findRenderedDOMComponentWithClass(testDoc, "input");
  const btn = ReactTestUtils.findRenderedDOMComponentWithClass(testDoc, "btn");
  expect(testDoc.state.longUrl).toBe("");
  input.value = 'https://www.facebook.com';
  ReactTestUtils.Simulate.change(input);
  ReactTestUtils.Simulate.click(btn);
  expect(testDoc.state.longUrl).toBe('https://www.facebook.com');
});

it("it stores the error message if an incorrect url is submitted", () => {
  const testDoc = ReactTestUtils.renderIntoDocument(<UrlForm />);
  const input = ReactTestUtils.findRenderedDOMComponentWithClass(testDoc, "input");
  const btn = ReactTestUtils.findRenderedDOMComponentWithClass(testDoc, "btn");
  const form = ReactTestUtils.findRenderedDOMComponentWithClass(testDoc, "form");
  input.value = 'notaurl';
  ReactTestUtils.Simulate.change(input);
  ReactTestUtils.Simulate.submit(form);
  expect(testDoc.state.errorMessage).toBe('Sorry that isn\'t a valid URL. Please provide a correct format eg: http://example.com');
});

it("it clears the errorMessage if an correct url is submitted", () => {
  const testDoc = ReactTestUtils.renderIntoDocument(<UrlForm />);
  const input = ReactTestUtils.findRenderedDOMComponentWithClass(testDoc, "input");
  const btn = ReactTestUtils.findRenderedDOMComponentWithClass(testDoc, "btn");
  const form = ReactTestUtils.findRenderedDOMComponentWithClass(testDoc, "form");
  input.value = 'facebook';
  ReactTestUtils.Simulate.change(input);
  ReactTestUtils.Simulate.submit(form);    input.value = 'https://www.facebook.com';
  ReactTestUtils.Simulate.change(input);
  ReactTestUtils.Simulate.submit(form);
  expect(testDoc.state.errorMessage).toBe('');
});

it("it clears the longUrl after submitted", () => {
    const testDoc = ReactTestUtils.renderIntoDocument(<UrlForm />);
    const input = ReactTestUtils.findRenderedDOMComponentWithClass(testDoc, "input");
    const btn = ReactTestUtils.findRenderedDOMComponentWithClass(testDoc, "btn");
    const form = ReactTestUtils.findRenderedDOMComponentWithClass(testDoc, "form");
    input.value = 'https://www.facebook.com';
    ReactTestUtils.Simulate.change(input);
    ReactTestUtils.Simulate.submit(form);
    expect(testDoc.state.longUrl).toBe("");
  });

  it("creates a shortened URL and stores in state", () => {
    const testDoc = ReactTestUtils.renderIntoDocument(<UrlForm />);
    testDoc.state.shortId = 160291;
    testDoc.makeShortUrl();
    expect(testDoc.state.shortUrl).toBe('localhost:8080/api/160291');
  });
