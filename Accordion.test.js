import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import Accordion from './Accordion';
import { shallow } from 'enzyme'

describe(`Accordian Component`, () => {  
  const sectionsProp = [
    {
      title: 'Section 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Section 2',
      content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
    },
    {
     title: 'Section 3',
      content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
    },
  ];

  it('renders an empty li when section prop not supplied', () => {
    const wrapper = shallow(<Accordion />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  it('renders no sections as active by default', () => {
    const wrapper = shallow(<Accordion sections={sectionsProp}/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  it('component opens a clicked section', () => {
    const wrapper = shallow(<Accordion sections={sectionsProp} />)
    wrapper.find('button').at(0).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  it('component opens last section if multiple sections are clicked', () => {
    const wrapper = shallow(<Accordion sections={sectionsProp} />)
    wrapper.find('button').at(0).simulate('click')
    wrapper.find('button').at(2).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})