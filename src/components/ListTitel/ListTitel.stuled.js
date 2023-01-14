import styled from 'styled-components';
import { CgChevronRight } from 'react-icons/cg';

export const DivTitle = styled.div`
  display: flex;
  align-items: center;

  flex-direction: row;
  cursor: pointer;
`;

export const DivDecoretion = styled.div`
  width: 8px;
  height: 35px;
  background: linear-gradient(316.53deg, #326cff 13.2%, #26fff2 71.54%);
  border-radius: 50px;
`;

export const MainTitle = styled.p`
  text-align: start;
  color: #fff;
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 20px;
  margin-left: 11px;
  border-bottom-right-radius: 100px;
  border-top-right-radius: 100px;
  transition: 760ms cubic-bezier(0.43, 0.21, 0, 1.03);
  max-height: 100%;
  padding-bottom: 6px;
  padding-right: 6px;
  // 10s - скорость анимации
  background-size: 400%; // Можно менять и подбирать интенсивность
  transition: background-color 760ms cubic-bezier(0.43, 0.21, 0, 1.03);
  animation: gradientEnd 1s linear;

  :hover {
    background: linear-gradient(316.53deg, #26fff2 13.2%, #326cff 71.54%);
    animation: gradient 1s linear;
  }
`;

export const CgChevronRightStyle = styled(CgChevronRight)`
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 20px;

  color: #ffffff;
`;
