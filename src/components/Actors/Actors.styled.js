import styled from 'styled-components';

export const MainDiv = styled.div``;

export const WrapperTitel = styled.div`
  margin-bottom: 40px;
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  gap: 60px;
`;

export const Item = styled.li`
  display: flex;
  gap: 20px;
  flex-direction: column;
  cursor: pointer;
  transition: 760ms cubic-bezier(0.43, 0.21, 0, 1.03);

  :active {
  }
  :focus,
  :hover {
    img {
      transition: 760ms cubic-bezier(0.43, 0.21, 0, 1.03);
      box-shadow: 0px 3px 20px 1px #ffffff;
    }
    p {
      transition: 760ms cubic-bezier(0.43, 0.21, 0, 1.03);
      box-shadow: 0px 3px 20px 1px #ffffff;
      border-radius: 100px;
      padding: 4px;
    }
  }
`;
export const Title = styled.div`
  color: #ffffff;
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  text-align: center;
`;
export const Img = styled.img`
  width: 190px;
  height: 190px;
  border-radius: 100px;
`;
