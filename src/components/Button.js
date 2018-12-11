import React from 'react';
import PropTypes from 'prop-types';

//I can use a functional component here because I just need to pass props,
//I don't need life cycle method and state
//This is a Pure Components because it is declared as a function that has no state and returns the same markup given the same props
const  Button = props => {
  return <button className="button" onClick={() => { props.handleClick() }}>{props.children}</button>;
}

Button.propTypes = {
  handleClick: PropTypes.func,
}

export default Button;