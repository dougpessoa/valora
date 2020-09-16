import styled from 'styled-components';

import { BiSearchAlt2, BiPlus } from '../../styles/icons';

export const Container = styled.div`
  width: 90%;
  min-width: 400px;
  height: 480px;
  margin-bottom: 40px; 
  border: 2px solid rgba(0, 0, 0, 0.15);
  min-width: 600px;

  @media (max-width: 1045px) {
    height: 580px;
  }
`;

export const Head = styled.div`
  width: 100%;
  height: 70px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.15);
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    text-transform: uppercase;
    font-weight: 500;
  }

  @media (max-width: 1045px) {
    height: fit-content;
    flex-direction: column;

    h2 {
      margin-bottom: 20px;
    }
  }
`;

export const SearchArea = styled.div`
  width: 400px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;

export const SearchForm = styled.form`
  width: 340px;
  height: 40px;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;

  input {
    width: calc(100% - 33px);
    height: 100%;
    border: transparent;
    padding: 6px;
  }

  button {
    background: white;
    border: none;
    display: flex;
    align-items: center;
  }

`;

export const SearchIcon = styled(BiSearchAlt2)`
  width: 33px;
  height: 33px;
  color: rgba(0, 0, 0, 0.3);
`;

export const AddIcon = styled(BiPlus)`
  width: 18px;
  height: 18px;
  color: white;
`;

export const Buttons = styled.div`
  width: 170px;
  display: flex;
  justify-content: space-between;


  @media (max-width: 1045px) {
    margin-top: 20px;
  }
`;
