import React from 'react';
import { ThemeProvider } from 'styled-components';
import Video from '../Video';
import Playlist from './Playlist';
import StyledWoofPlayer from '../styles/StyledWoofPlayer';

const theme = {
  bgcolor: '#353535',
  bgcolorItem: '#414141',
  bgcolorItemActive: '#405c63',
  bgcolorPlayed: '#526d4e',
  border: 'none',
  borderPlayed: 'none',
  color: '#fff',
};

const themeLight = {
  bgcolor: '#fff',
  bgcolorItem: '#fff',
  bgcolorItemActive: '#80a7b1',
  bgcolorPlayed: '#7d9979',
  border: '1px solid #353535',
  borderPlayed: 'none',
  color: '#353535',
};
const WoofPlayer = (props) => (
  <ThemeProvider theme={state.nightMode ? theme : themeLight}>
    <StyledWoofPlayer>
      <Video />
      <Playlist />
    </StyledWoofPlayer>
  </ThemeProvider>
);

export default WoofPlayer;
