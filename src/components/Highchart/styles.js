import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: calc(100% - 70px);

  display: flex;
  align-items: center;
  justify-content: center;
`;

const load = keyframes`
  
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }

`;

export const Loading = styled.div`
  width: 100%;
  height: calc(100% - 70px);
  display: flex;
  justify-content: center;
  align-items: center;

  .loading {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  

    div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: 64px;
      height: 64px;
      margin: 8px;
      border: 8px solid #54a0ff;
      border-radius: 50%;
      animation: ${load} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: #54a0ff transparent transparent transparent;

      &:nth-child(1) {
        animation-delay: -0.45s;
      }

      &:nth-child(2) {
        animation-delay: -0.3s;
      }

      &:nth-child(3) {
        animation-delay: -0.15s;
      }
    }
  }
`;