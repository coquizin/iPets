import styled from "styled-components";

export const CardModalContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-height: 600px;
  overflow-y: auto;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
  z-index: 80;
  max-width: 500px;
  width: 100%;
  padding: 15px;
  border-radius: 0.375rem;

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }

  @media (min-width: 768px) {
    padding: 14px;
    max-height: none;
    overflow-y: hidden;
  }
`;
