import styled, { css } from 'styled-components';

import { FaCog } from './icons';


export const Head = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    text-transform: uppercase;
    font-weight: 500px;
  }
`;

export const Button = styled.button`
  user-select: none;
  border: 1px solid transparent;
  padding-top: 0.375rem;
  padding-right: 0.95rem;
  padding-bottom: 0.375rem;
  padding-left: 0.95rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  transition: color .15s;
  display: flex;
  align-items: center;

  ${props => props.strong && css`
      font-weight: 700;
  `}

  &.primary {
    background: #10ac84;
    color: white;

    &:hover {
      background: #028461;
    }
  }
  
  &.info {
    background: #54a0ff;

    &:hover {
      background: #2572d1;
    }
  }

  &.danger {
    background: #ee5253;
    color: #fff;

    &:hover {
      background: #c43838;
    }
  }
`;

export const CogIcon = styled(FaCog)`
  width: 15px;
  height: 15px;
  color: white;
`;

export const List = styled.ul`
  width: 100%;
  border: 2px solid rgba(0, 0, 0, 0.07);
`;

export const Item = styled.li`
  width: 100%;
  height: 100px;
  background: white;
  display: flex;
  align-items: center;
  padding: 20px;
  background: white;

  :nth-child(even) {
    background-color: #ddd;
  }
`;

export const Buttons = styled.div`
  width: 250px;
  margin-left: 50px;
  display: flex;
  justify-content: space-between;
`;

export const EmptyList = styled.div`
  width: 100%;
  height: 200px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 24px;
  font-weight: 600;

  border: 2px solid rgba(0, 0, 0, 0.07);
`;