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
  width: 105px;
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
    width: 103px;
  }
`;

export const FloorButtonWrapper = styled.div`
  width: 80px;
  height: 150px;
  background-color: white
  border-radius: 10px;
  position: absolute;
  bottom: 25px;
  left: 10px;
  z-index: 100;
`;

export const FloorButton = styled.div<{ active: boolean }>`
  width: 100%;
  height: calc(100% / 3);
  background-color: ${(props: any) => (props.active ? 'pink' : 'white')};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  border-bottom: 1px solid;
  cursor: pointer;
`;

export const CurrentButton = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border: 3px solid ${theme.colors.burgundy};
  border-radius: 50px;
  position: absolute;
  bottom: 200px;
  right: 3px;
  z-index: 100;
  display: flex;

  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const GoogleMapWrapper = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
`;
