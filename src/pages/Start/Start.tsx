import React from 'react';
import {
  MainContainer,
  LogoImage,
  NextButton,
  ButtonText,
  Introduce,
  CenterWrapper,
  Description,
} from './Start.styles';
import khuLogo from '../../assets/images/khuLogo.png';
import logoText from '../../assets/images/logoText.png';
import description from '../../assets/images/description.png';
import { useNavigate } from 'react-router-dom';

const Start = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate('/main');
  };

  return (
    <MainContainer>
      <CenterWrapper>
        <LogoImage src={khuLogo} />
        <Introduce src={logoText} />
        <Description src={description} />
      </CenterWrapper>
      <NextButton>
        <ButtonText onClick={handleNextClick}>시작하기</ButtonText>
      </NextButton>
    </MainContainer>
  );
};

export default Start;
