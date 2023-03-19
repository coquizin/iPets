import styled, { keyframes } from "styled-components";

const overlayShow = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1 }
`;

const overlayDisappear = keyframes`
  0% { opacity: 1 }
  100% { opacity: 0 }
`;

const contentShow = keyframes`
  0% { transform: translateX(-100%) }
  100% { transform: translateX(0%) }
`;

const contentDisappear = keyframes`
  0% { transform: translateX(0%) }
  100% { transform: translateX(-100%) }
`;

export const StyledOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  inset: 0;
  z-index: 60;

  animation-name: ${(props) =>
    props.disappear ? overlayDisappear : overlayShow};
  animation-duration: 300ms;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
`;

export const StyledContent = styled.div`
  z-index: 60;
  background-color: #fff;
  position: fixed;
  padding: 25px;
  top: 0;
  left: 0;
  right: auto;
  max-width: 100vw;
  width: 360px;
  height: 100%;
  translate: translateX(-100%);

  &:focus {
    outline: none;
  }

  animation-name: ${(props) =>
    props.disappear ? contentDisappear : contentShow};
  animation-duration: 300ms;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
`;

export const StyledTitle = styled.h2`
  font-size: 1.375rem;
  font-weight: bold;
  color: #b2b5be;
`;

export const IconButton = styled.button`
  all: unset;
  border-radius: 5px;
  height: 30px;
  width: 30px;
  color: #adbac7;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
