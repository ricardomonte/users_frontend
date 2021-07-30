import React from 'react';
import TopAppBar, {
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
} from '@material/react-top-app-bar';
import '@material/react-top-app-bar/dist/top-app-bar.css';

const MenuTop = () => (
  <TopAppBar>
    <TopAppBarRow>
      <TopAppBarSection align='start'>
        <TopAppBarTitle>My Important Contacts</TopAppBarTitle>
      </TopAppBarSection>
    </TopAppBarRow>
  </TopAppBar>
);

export default MenuTop