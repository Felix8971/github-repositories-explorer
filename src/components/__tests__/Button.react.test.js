import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';

//if snapshot failed with enzyme run `yarn test -u` to update it

import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

describe('Button', () => {
  it('should be defined', () => {
    expect(Button).toBeDefined();
  });
    
  const mockFn = jest.fn();
  it('should render correctly', () => {
    const tree = shallow(
      <Button handleClick={mockFn}>OK</Button>
    );
    expect(tree).toMatchSnapshot();
  });

  it('should contain text OK', () => {
    const tree = shallow(
      <Button handleClick={mockFn}>OK</Button>
    );
    expect(tree.text()).toEqual('<styled.button />');
  });
 
  it('should call mock function when button is clicked', () => {
    const tree = shallow(
      <Button handleClick={mockFn} />
    );
    tree.simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
});