import styled from 'styled-components';

export const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 100%;
  height: 64px;
  padding-right: 32px;

  div {
    display: flex;
    align-items: center;

    a {
      color: #757575;
      font-size: 16px;
      text-decoration: none;
      padding-right: 16px;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }

    svg {
      font-size: 32px;
      cursor: pointer;
    }

    #apps {
      padding-left: 8px;
    }

    #user {
      width: 48px;
      height: 48px;
      margin-left: 16px;
      border: 1px solid #757575;
      border-radius: 50%;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
