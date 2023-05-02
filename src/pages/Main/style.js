import styled from "styled-components";

export const MainContainer = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  padding: 30px;
  margin: 80px auto;
  h1 {
    font-size: 20px;
    display: flex;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;

  input {
    flex: 1;
    padding: 10px 15px;
    border-radius: 4px;
    border: 1px solid #ddd;
  }
`;

export const SubmitButton = styled.button`
  background: #0d2636;
  border: none;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
