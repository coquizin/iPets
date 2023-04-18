import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  min-width: 330px;
  align-items: center;
  margin-bottom: 30px;
`;

export const Content = styled.div`
  width: 100%;
  height: 230px;
  background-color: #2c2b2c;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  /* align-items: end; */
`;

export const Strip = styled.div`
  width: 100%;
  height: 40px;
  margin-top: 25px;
  background-color: #bdbdbd;
  flex-direction: column;
`;

export const TextCVV = styled.h1`
  margin-right: 0px;
`;

export const View = styled.div`
  width: 80%;
  margin-top: 50px;
`;

export const Text = styled.h1<propsText>`
  width: auto;
  max-height: 35px;
  color: #fafafa;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "14px")};
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
`;

interface propsText {
  fontSize: string;
  bold?: boolean;
}

export const ViewInformation = styled.div`
  width: 100%;
  padding: 20px;
  flex-direction: row;
  align-items: flex-end;
  align-self: flex-end;
  justify-content: space-between;
`;
