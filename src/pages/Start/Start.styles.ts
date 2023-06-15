import styled from '@emotion/styled';
import theme from '../../styles/theme';

export const MainContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 412px;
  height: 100vh;
  background-color: white;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  border: 2px solid;
`;

export const LogoImage = styled.img`
  width: 70%;
  height: 190px;
  margin: 0 auto;
`;

export const Introduce = styled.img`
  position: absolute
  margin: 0 auto;
  width: 200px;
  left: 0px;
  right: 0px;
  color: black;
  
`;

export const NextButton = styled.div`
  position: absolute;
  width: 330px;
  height: 50px;
  bottom: 40px;
  margin: 0 auto;
  background-color: ${theme.colors.burgundy};
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
  color: white;
  ${theme.typography.semibold01};
`;

export const CenterWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 300px;
  top: 150px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Description = styled.img`
  position: absolute
  margin: 0 auto;
  width: 280px;
  left: 0px;
  right: 0px;
  color: black;
  
`;
