import styled from "styled-components";
import { Link } from "react-router-dom";

export const Loading = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  margin: 80px auto;
  padding: 30px;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 150px;
    border-radius: 20%;
    margin: 20px 0;
  }
  h1 {
    font-size: 30px;
    color: #0d2636;
  }
  p {
    margin-top: 5px;
    font-size: 14px;
    color: #000;
    text-align: center;
    line-height: 1.4;
    max-width: 400px;
  }
`;

export const BackButton = styled(Link)`
  border: 0;
  outline: 0;
  background: transparent;
`;

export const IssuesList = styled.ul`
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid #eee;

  li {
    display: flex;
    padding: 15px 10px;
    align-items: center;

    & + li {
      margin-top: 12px;
    }
  }

  img {
    width: 46px;
    object-fit: contain;
    border-radius: 50%;
    border: 2px solid #0d2636;
  }
  div {
    flex: 1;
    margin-left: 12px;

    p {
      margin-top: 10px;
      font-weight: 400;
      color: #222;
    }
  }
  strong {
    font-size: 15px;
    a {
      text-decoration: none;
      color: #222;
      transform: 0.3s;

      &:hover {
        color: #0071db;
      }
    }
    span {
      background: #222;
      color: #fff;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 600;
      padding: 4px 7px;
      margin-left: 10px;
      display: block;
      width: 70%;
      margin: 5px 0;
    }
  }
`;

export const PageActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    outline: 0;
    border: 0;
    background: #222;
    color: #fff;
    padding: 5px 10px;
    border-radius: 4px;
  }
`;
