import styled from 'styled-components';

import { IoIosArrowForward } from '../../styles/icons';

export const Container = styled.div`
  width: 90%;
  min-width: 600px;

  margin-bottom: 40px; 
`;

export const Company = styled.p`
  white-space: nowrap; 
  width: 50%; 
  overflow: hidden;
  text-overflow: ellipsis; 
  font-weight: 700;
  font-size: 25px;
`;

export const Value = styled.div`
  width: 130px;

  h5 {
    font-weight: 600;
    font-size: 21px;
  }
`;

export const Buttons = styled.div`
  width: 250px;
  margin-left: 50px;
  display: flex;
  justify-content: space-between;
`;

export const ArrowDownIcon = styled(IoIosArrowForward)`
  width: 20px;
  height: 20px;
  color: white;
  transform: rotate(90deg);
`;