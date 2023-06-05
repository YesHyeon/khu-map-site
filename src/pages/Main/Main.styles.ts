import styled from '@emotion/styled';
import theme from '../../styles/theme';

export const MainContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 412px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Header = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${theme.colors.burgundy};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  ${theme.typography.semibold01};
`;

export const Feedback = styled.div`
  position: absolute;
  top: 23px;
  right: 20px;
  width: 40px;
  height: 20px;
  font-size: 13px;
  text-decoration: underline;
  color: white;
`;

export const SelectorBoxWrapper = styled.div`
  width: 100%
  padding-top: 37px;
  padding-bottom: 17px;
  background: rgba(137, 137, 137, 0.8);
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  
`;

export const ParticipantsTitle = styled.div`
  color: grey
  margin-bottom: 8px;
`;

export const BuildingWraaper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  white-space: normal;
  justify-content: center;
  flex-basis: 100%;
  padding-top: 20px;
`;

export const Building = styled.div`
  width: 110px;
  height: 33px;
  margin-right: 10px;
  margin-left: 10px;
  margin-bottom: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: white;

  @media screen and (max-width: 412px) {
    width: 64px;
  }
`;
