/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import StyledNightmode from './styles/StyledNightmode';

const Nightmode = ({ nightModeCallback, nightMode }) => (
  <StyledNightmode>
    <span>Nightmode: </span>
    <label className="switch">
      <input type="checkbox" checked={nightMode} onChange={nightModeCallback} />
      <span className="slider round" />
    </label>
  </StyledNightmode>
);

export default Nightmode;
