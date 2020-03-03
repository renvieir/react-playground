import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.main`
  display: flex;
  justify-content: space-between;

  margin: 0 50px;
`;

export const CatFeed = styled.section`
  background: #fff;
  border-radius: 4px;
  width: 316px;

  & + section {
    margin-left: 25px;
  }

  header {
    font-weight: bold;
    font-size: 20px;
    line-height: 20px;
    text-transform: uppercase;
    color: #000000;
    padding: 16px;
    border-bottom: 1px solid #d0dae8;
  }

  ul {
    list-style: none;
    padding: 16px;

    li {
      font-style: italic;
      font-weight: normal;
      font-size: 15px;
      line-height: 14px;
      color: #000;
      padding: 15px 0;
      margin: 0 10px;

      display: flex;
      justify-content: space-between;
      align-items: center;

      & + li {
        border-top: 1px solid #d0dae8;
      }
    }
  }
`;

export const CatList = styled(CatFeed)`
  width: auto;
  flex: 1;

  ul {
    padding: 0 16px;

    li {
      padding: 10px 0;
    }
  }

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    object-position: center;
    border-radius: 4px;
  }
`;

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px; /* column and row gap */
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;

    img {
      align-self: center;
      max-width: 280px;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    button {
      display: flex;
      align-items: center;

      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#7159c1')};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;
