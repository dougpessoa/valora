import React from 'react';

import { 
  Container, 
  LandscapeIcon, 
  User,
  UserDescription,
  UserAvatar,
  UserIcon
} from './styles';

function Header() {
  
  return (
    <Container>
      <LandscapeIcon  />

      <User>
        <UserDescription>
          <h5>john doe</h5>
          <span>desenvolvedor</span>
        </UserDescription>
        

        <UserAvatar>
          <UserIcon />
        </UserAvatar>
      </User>
    </Container>
  );
}

export default Header;