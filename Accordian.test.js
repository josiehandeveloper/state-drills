import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import Accordian from './Accordian';

describe(`Accordian Component`, () => {
  const sectionProp = [];
  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Accordian />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
  it('renders the section by default', () => {
      const tree = renderer.create(<Sections sections={sectionsProp} />).toJSON()
      expect(tree).toMatchSnapshot()
  })
})