import React from 'react';
import { shallow /*, mount, render*/ } from 'enzyme';
import {Convertion} from '../Convertion';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

describe('Convertion', () => {

  it('should be defined', () => {
    expect(Convertion).toBeDefined();
  });

  it('should render correctly', () => {
    const tree = shallow(
      <Convertion/>
    );
    expect(tree).toMatchSnapshot();
  });

  it('should contain 2 textarea', () => {
    const tree = shallow(
      <Convertion/>
    );
    expect(tree.find('textarea')).toHaveLength(2);
  })
});