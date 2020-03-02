import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: row;

  margin-top: 20px;

  input {
    flex: 1; /* shortcut for flex-grow, flex-shrink and flex-basis */

    border: 1px solid #eee;
    border-radius: 4px;
    padding: 10px 15px;
    font-size: 16px;

    ${props =>
      props.error &&
      css`
        border-color: red;
      `}
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  display: flex;
  justify-content: center;
  align-items: center;

  background: #7159c1;
  border: 0;
  border-radius: 4px;
  padding: 0 15px;
  margin-left: 10px;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 20px;

  li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 15px 0;

    & + li {
      /* aplica estilo a partir do segundo li */
      border-top: 1px solid #eee;
    }

    a {
      color: #7159c1;
      text-decoration: none;
    }
  }
`;
