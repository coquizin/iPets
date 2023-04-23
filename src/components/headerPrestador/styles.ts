import styled from "styled-components";

export const MenuToggle = styled.div`
  display: block;
  position: relative;
  z-index: 70 !important;

  -webkit-user-select: none;
  user-select: none;
`;

export const MenuToggleSpan = styled.span`
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;

  background-color: #f59e0b;
  border-radius: 3px;

  z-index: 70 !important;

  transform-origin: 4px 0px;
  transform: ${(props) =>
    props.checked ? "rotate(45deg) translate(-2px, -1px);" : "none"};
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;

  &:nth-last-child(1) {
    transform-origin: 0% 100%;
    transform: ${(props) =>
      props.checked ? " rotate(-45deg) translate(1px, 3px)" : "none"};
  }

  &:nth-last-child(2) {
    opacity: ${(props) => (props.checked ? "0" : "1")};
    transform: ${(props) =>
      props.checked ? "rotate(0deg) scale(0.2, 0.2)" : "none"};
  }

  &:nth-last-child(3) {
    transform-origin: 0% 0%;
    transform: ${(props) =>
      props.checked ? "rotate(45deg) translate(0.5px, -4px);" : "none"};
  }
`;
