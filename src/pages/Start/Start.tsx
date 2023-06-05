import React from 'react';
import {
  MainContainer,
  LogoImage,
  NextButton,
  ButtonText,
  Introduce,
} from './Start.styles';
import khuLogo from '../../assets/images/khuLogo.png';
import { useNavigate } from 'react-router-dom';

const Start = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate('/main');
  };

  return (
    <MainContainer>
      <LogoImage src={khuLogo} />
      <Introduce>
        2023-1 디자인적사고 수업에서 개발한 <br />
        경희대학교 국제캠퍼스 건물 지도입니다.
      </Introduce>
      <NextButton>
        <ButtonText onClick={handleNextClick}>시작하기</ButtonText>
      </NextButton>
    </MainContainer>
  );
};

export default Start;
