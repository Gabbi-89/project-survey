import React from 'react';

import './buttons.css';

export const Buttons = (props) => {

  return ( 
    <button
      type="submit"
      onClick={()=> {props.function(props.value)}}
      disabled={props.disabled}
    >
      {props.title}
    </button>
  )
}