import React from 'react';
import { shallow /*, mount, render*/ } from 'enzyme';
import {Explorer} from '../Explorer';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

describe('Explorer', () => {

  it('should be defined', () => {
    expect(Explorer).toBeDefined();
  });

  it('should render correctly', () => {
    const tree = shallow(
      <Explorer/>
    );
    expect(tree).toMatchSnapshot();
  });

});