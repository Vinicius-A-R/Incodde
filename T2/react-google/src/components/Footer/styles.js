import styled from 'styled-components';

export const SecFooter = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 90px;
  padding-left: 24px;
  padding-right: 24px;
  background-color: #f2f2f2;
  border-top: 1px solid #e4e4e4;

  a {
    font-size: 20px;
    text-decoration: none;
    color: #5f5f5f;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Location = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 44px;
  border-bottom: 1px solid #e4e4e4;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 44px;

  div {
    display: flex;
    align-items: center;

    a {
      padding-right: 16px;
    }
  }
`;
