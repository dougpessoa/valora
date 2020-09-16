import styled from 'styled-components';

import { BiPlus } from '../../styles/icons';

export const Container = styled.div`
  width: 90%;
  min-width: 600px;

  margin-bottom: 40px; 
`;

export const Company = styled.p`
  white-space: nowrap; 
  width: 30%; 
  overflow: hidden;
  text-overflow: ellipsis; 
  font-weight: 700;
  font-size: 25px;
`;

export const Value = styled.div`
  width: 130px;
  text-align: center;

  h5 {
    font-weight: 600;
    font-size: 21px;
    text-transform: uppercase;
  }
`;

export const NumberField = styled.input`
  width: 100px;
  padding: 4px 10px;
`;

export const AddIcon = styled(BiPlus)`
  width: 20px;
  height: 20px;
  color: white;
`;