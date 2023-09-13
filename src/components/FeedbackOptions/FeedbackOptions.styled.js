import styled from 'styled-components';

export const ContHeader = styled.h2`
  font-family: monospace;
  font-size: 30px;
`;

export const ContButton = styled.button`
  background-color: #ffffff4a;
  color: #fff0f0;

  border-style: solid;
  border-color: none;
  border-radius: 29px;
  border-color: #18191f;

  /* box-shadow: 2px 2px 2px #00000080, 10px 1px 12px #00000080,
    2px 2px 10px #00000080, 2px 2px 3px #00000080, inset 2px 2px 10px #00000080,
    inset 2px 2px 10px #00000080, inset 2px 2px 10px #00000080; */

  font-family: inherit;
  font-size: 35px;

  width: 50px;
  height: 50px;

  &:not(:last-child) {
    margin-right: 15px;
  }

  animation: animate 3s linear infinite;
  text-shadow: 0 0 50px #0072ff, 0 0 100px #0072ff, 0 0 150px #0072ff,
    0 0 200px #0072ff;
  box-shadow: 0 0 50px #0072ff20;

  &:nth-child(2) {
    animation-delay: 0.3s;
  }
  &:nth-child(3) {
    animation-delay: 0.1s;
  }
  &:nth-child(4) {
    animation-delay: 0.7s;
  }

  @keyframes animate {
    from {
      filter: hue-rotate(0deg);
    }
    to {
      filter: hue-rotate(360deg);
    }
  }

  transition: transform 0.1s ease;
  &:active {
    transform: scale(0.95);
    color: white;
    background-color: #ffffff5a;
    box-shadow: 0 0 50px #0072ff70;
  }
`;
