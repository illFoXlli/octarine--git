import styled from 'styled-components';
import registrationBaner from '../../images/registrationBaner/RegistrationBaner.png';

export const MainDiv = styled.section`
  position: relative;
  width: 1224px;
  height: 270px;
  margin-left: auto;
  margin-right: auto;
`;
export const Div = styled.section`
  display: flex;
  align-items: center;
  position: relative;
  width: 1224px;
  height: 270px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 121px;
  margin-bottom: 121px;
  background-image: url(${registrationBaner});
  background-size: cover;
  border-radius: 20px;
  /* padding-top: 50px; */
`;

export const Blur = styled.div`
  /* position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background: #c4c4c4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  opacity: 0.5;

  border-radius: 20px; */
`;
export const Filter = styled.div`
  /* position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.5;
  border-radius: 20px;
  background: linear-gradient(336.56deg, #000000 58.12%, #ffffff 124.09%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
`;

export const Title = styled.p`
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  margin-left: 57px;
  margin-right: 82px;
  color: #ffffff;
  /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
`;
export const Button = styled.a`
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  padding: 15px 18px;
  border: 0;
  background: linear-gradient(316.53deg, #26fff2 13.2%, #326cff 71.54%);
  box-shadow: 0px 4px 50px rgba(50, 108, 255, 0.5);
  border-radius: 100px;

  cursor: pointer;
  :focus,
  :hover {
    box-shadow: 0px 3px 20px 1px #26fff2;
  }
  :active {
    transition: 100ms cubic-bezier(0.43, 0.21, 0, 1.03);
    transform: translateY(2px);
  }
`;
