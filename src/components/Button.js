import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Btn = styled.button`
   background: white;
    border: 2px solid #000000;
    color: #000000;
    border-radius: 0px;
    padding: 9px;
    font-weight: bold;
    margin: 12px;
    width:100px;
    cursor: pointer;
    &:hover {
        background: #ebe8e8;
    }
`;

// I can use a functional component here because I just need to pass props,
// I don't need life cycle method and state
// This is a Pure Components because it is declared as a function that has no state and returns the same markup given the same props
const  Button = props => {
  return <Btn onClick={() => { props.handleClick() }}>{props.children}</Btn>;
}

Button.propTypes = {
  handleClick: PropTypes.func,
}

export default Button;