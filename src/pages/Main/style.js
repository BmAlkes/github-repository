import styled, { keyframes, css } from "styled-components";

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
const animateButto = keyframes`
from{
  transform: rotate(0deg)
}to{
transform: rotate(360deg);
}

`;
export const SubmitButton = styled.button.attrs((props) => ({
  type: "submit",
  disabled: props.loading,
}))`
  background: #0d2636;
  border: none;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }

  ${(props) =>
    props.loading &&
    css`
      svg {
        animation: ${animateButto} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 20px;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & + li {
      border-top: 1px solid #eee;
    }
    a {
      color: #0d2636;
      text-decoration: none;
    }
  }
`;

export const DeleteButton = styled.button.attrs({
  type: "button",
})`
  background: transparent;
  color: #0d2636;
  padding: 8px 7px;
  border: 0;
  outline: 0;
  border-radius: 4px;
`;
