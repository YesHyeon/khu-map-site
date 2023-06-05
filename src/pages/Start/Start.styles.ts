import styled from '@emotion/styled';
import theme from '../../styles/theme';

export const MainContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 412px;
  height: 100vh;
  background-color: ${theme.colors.burgundy};
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const LogoImage = styled.img`
  width: 100%;
  height: 250px;
  margin: 0 auto;
`;

export const Introduce = styled.div`
  position: absolute;
  width: 80%;
  top: 400px;
  height: 250px;
  margin: 0 auto;
  font-size: 20px;
  left: 0px;
  right: 0px;
  color: white;
`;

export const NextButton = styled.div`
  position: absolute;
  width: 330px;
  height: 50px;
  bottom: 40px;
  margin: 0 auto;
  background-color: white;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    cursor: pointer;
  }
`;

export const ButtonText = styled.text`
  font-size: 20px;
  ${theme.typography.semibold01};
`;
