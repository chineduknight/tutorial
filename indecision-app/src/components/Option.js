import React from 'react';

const Option = props => (
  <div>
    {props.optionText}
    <button
      className='btn btn-link'
      onClick={e => {
        props.handleDeleteOption(props.optionText);
      }}
    >
      remove
    </button>
  </div>
);

export default Option;
