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

  const handleInfoTextGet = () => {
    if (floor == 1) {
      return (
        <TextContainer>
          공학관 열람실
          <br />
          공과대학 행정실
          <br />
          쓰레기통
          <br />
          엘레베이터
          <br />
          설계 스튜디오
          <br />
          자판기
          <br />
          남자 화장실
          <br />
          여자 화장실
          <br />
          하나은행 atm
          <br />
          공대 수위실
          <br />
          신문함
          <br />
          정수기
          <br />
          응용화학화 <br />
          학생회실 <br />
          원자력공학과 <br />
          학과 사물함
        </TextContainer>
      );
    }
    if (floor == 2) {
      return (
        <TextContainer>
          교수휴게실
          <br />
          여학생 휴게실
          <br />
          복사실
          <br />
          취업 정보 카페
          <br />
          남자 화장실
          <br />
          엘리베이터
          <br />
          여자 화장실
          <br />
          정수기
          <br />
          공학 도서관
        </TextContainer>
      );
    }
  };

  const array = [
    '회의실',
    '231',
    'CAL Lab실1',
    '건축설계실',
    '품평실',
    '모형제작실',
    '263',
    '265',
    '266',
    '푸른 광장',
    '송병덕 교수연구실',
    '강두선 교수연구실',
    '장윤석 교수연구실',
    '지반재해 & 지오시스템 연구실',
    '원자력 사이버 강의실',
    '정원석 교수연구실',
    '김광표 교수연구실',
    '오승대 교수연구실',
    '원자력안전연구실',
    '공과대학 학과사무실',
    '공과대학 행정실',
    '교수휴게실',
    '여학생 휴게실',
    '복사실',
    '취업 정보 카페',
    '공학 도서관',
  ];

  const getInfo = () => {
    return;
    <div></div>;
  };

  return <MainContainer floor={floor}>{handleInfoTextGet()}</MainContainer>;
};

export default InfoBox;
