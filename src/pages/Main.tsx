import React from 'react';
import {
  MainContainer,
  LogoImage,
  NextButton,
  ButtonText,
} from './Start.styles';
import khuLogo from '../assets/images/khuLogo.png';
import { useNavigate } from 'react-router-dom';

const Start = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate('/main');
  };

  return (
    <MainContainer>
      <LogoImage src={khuLogo} />
      <NextButton>
        <ButtonText onClick={handleNextClick}>하이</ButtonText>
      </NextButton>
    </MainContainer>
  );
};

export default Start;
