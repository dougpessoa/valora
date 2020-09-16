import styled from 'styled-components';

import { BiLandscape, FaUserAlt } from '../../styles/icons';

export const Container = styled.div`
  background: white;
  width: calc(100% - 70px);
  height: 70px;
  margin-left: 70px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px 30px 10px 20px;
  position: absolute;
`;

export const LandscapeIcon = styled(BiLandscape)`
  width: 22px;
  height: 22px;
  cursor: pointer;
  color: #10ac84;
  transform: scaleX(-1);
`;

export const User = styled.div`
  width: 160px;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserDescription = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  h5 {
    font-size: 18px;
    text-transform: uppercase;
  }

  span {
    font-size: 15px;
    text-transform: capitalize;
    font-weight: 300;
  }
`;


export const UserAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.15);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  cursor: pointer;
`;

export const UserIcon = styled(FaUserAlt)`
  width: 21px;
  height: 21px;
  color: #54a0ff;
`;
