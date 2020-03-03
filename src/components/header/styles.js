import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 50px;

  div {
    display: flex;
  }

  input {
    background: #fff;
    border: 0;
    border-radius: 4px;
    padding: 8px;
    min-width: 316px;
    font-size: 15px;

    margin-right: 25px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    background: #fff;
    border: 0;
    border-radius: 4px;
    padding: 8px;
    min-width: 316px;
    font-size: 15px;
  }
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;

  color: #fff;
  text-decoration: none;

  h2 {
    margin-left: 18px;
    font-family: 'Bennet Display' Helvetica, sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 25px;
    line-height: 30px;
  }
`;
