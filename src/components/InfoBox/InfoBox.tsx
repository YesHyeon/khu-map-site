import React from 'react';

import khuLogo from '../../assets/images/khuLogo.png';
import { useNavigate } from 'react-router-dom';

import eng from '../../assets/datas/eng2.json';
import { MainContainer, TextContainer } from './InfoBox.styles';

const InfoBox = (floor: number) => {
  if (floor == 1) {
    const floorInfo = eng['공과대학'].roomposition[0][floor];
  } else if (floor == 2) {
    const floorInfo = eng['공과대학'].roomposition[0][floor];
  }

  const getInfo = () => {
    return;
    <div></div>;
  };

  return (
    <MainContainer floor={floor}>
      <TextContainer>dd</TextContainer>
    </MainContainer>
  );
};

export default InfoBox;
