import React from 'react';
import Option from './Option';

const Options = props => (
  <div>
    <div className='widget-header'>
      <h3>Your Options</h3>
      <button className='btn btn-link' onClick={props.handleDeleteOptions}>
        Remove All
      </button>
    </div>
    {props.options.length === 0 && <p>Please add an option to get started!</p>}
    {props.options.map(option => (
      <Option
        key={option}
        optionText={option}
        handleDeleteOption={props.handleDeleteOption}
      />
    ))}
  </div>
);

export default Options;
