import styled from 'styled-components';

export const SecMain = styled.main`
  width: 100%;
  height: 450px;
  position: relative;
  top: 50%;
  transform: translateY(-80%);

  display: flex;
  flex-direction: column;
  justify-content: center;

  #logo {
    background-image: url('./../img/1024px-Google_2015_logo.svg.png');
    object-fit: contain;
    padding-bottom: 24px;
  }
`;

export const Search = styled.div`
  width: 100%;
  min-height: 120px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.div`
  width: 484px;
  height: 44px;
  border: 1px solid #dfe1e5;
  border-radius: 24px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
    border-color: rgba(223, 225, 229, 0);
  }

  svg {
    font-size: 20px;
    color: #5f6368;
    cursor: pointer;

    &:hover {
      transform: scale(1.3);
    }
  }

  input {
    height: 34px;
    width: 387px;
    padding: 8px;
    border: none;
  }
`;

export const SearchButton = styled.div`
  padding: 24px 0;

  button {
    background-image: -webkit-linear-gradient(top, #f5f5f5, #f1f1f1);
    background-color: #f2f2f2;
    border: 1px solid #f2f2f2;
    border-radius: 4px;
    color: #5f6368;
    font-family: arial, sans-serif;
    font-size: 14px;
    margin: 11px 4px;
    padding: 0 16px;
    line-height: 27px;
    height: 36px;
    min-width: 54px;
    text-align: center;
    cursor: pointer;
    user-select: none;

    &:hover {
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
      background-image: -webkit-linear-gradient(top, #f8f8f8, #f1f1f1);
      background-color: #f8f8f8;
      border: 1px solid #c6c6c6;
      color: #222;
    }
  }

  span {
    display: block;
    text-align: center;
    margin-top: 24px;
  }

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
