import styled from "styled-components";

export const CheckBox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const CheckMark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 19px;
  width: 19px;
  background-color: ${(props) => (props.checked ? "#E9B13F" : "#fff")};
  border: 1px solid #bfc7c9;
  border-radius: 3px;

  &::after {
    content: "";
    position: absolute;
    display: ${(props) => (props.checked ? "block" : "none")};
  }

  &::after {
    left: 6px;
    top: 3.5px;
    width: 6px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
