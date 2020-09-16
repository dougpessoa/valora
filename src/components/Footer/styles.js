import styled from 'styled-components';

import { AiFillCopyrightCircle } from '../../styles/icons';

export const Container = styled.div`
  width: 100%;
  height: 60px;
  /* background: red; */
  padding: 20px 20px 20px 40px;

  display: flex;
  align-items: center;

  font-size: 19px;
  font-weight: 600;
  border-top: 2px solid rgba(0, 0, 0, 0.15);
`;

export const CopyIcon = styled(AiFillCopyrightCircle)`
  width: 23px;
  height: 23px;
  color: gray;
`;