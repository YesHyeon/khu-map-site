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
  overflow-x: none;
`;

export const Header = styled.div`
  width: 100%;
  height: 60px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-bottom: 3px solid black;
  ${theme.typography.semibold01};
`;

export const Feedback = styled.div`
  position: absolute;
  top: 15px;
  right: 20px;
  width: 40px;
  height: 20px;
  font-size: 13px;
  text-decoration: underline;
  color: black;
  cursor: pointer;
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

export const Building = styled.div<{ active: boolean }>`
  width: 105px;
  height: 33px;
  margin-right: 10px;
  margin-left: 10px;
  margin-bottom: 6px;
  font-size: 13px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  justify-content: center;
  border-radius: 8px;
  background-color: ${(props: any) =>
    props.active ? `${theme.colors.burgundy};` : 'white'};
  color: ${(props: any) => (props.active ? 'white' : 'black')};

  @media screen and (max-width: 412px) {
    width: 103px;
  }
`;

export const FloorButtonWrapper = styled.div`
  width: 100px;
  height: 150px;
  background-color: white
  border-radius: 10px;
  position: absolute;
  bottom:24px;
  left: 10px;
  z-index: 100;
`;

export const FloorButton = styled.div<{ active: boolean }>`
  width: 100%;
  height: 40px;
  background-color: ${(props: any) =>
    props.active ? `${theme.colors.burgundy}` : 'white'};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  border-bottom: 1px solid;
  cursor: pointer;
  color: ${(props: any) => (props.active ? 'white' : 'black')};
`;

export const CurrentButton = styled.img`
  width: 40px;
  height: 40px;
  background-color: white;
  box-shadow: 1px 3px 4px black;
  padding: 5px;
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

export const FloorText = styled.div`
  width: 100%;
  height: 10px;
  background-color: 'white'
  border-radius: 10px;
  display: flex;
  padding-left: 21px;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 6px;
  
`;

export const FixText = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

export const GoogleMapWrapper = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const InfoButton = styled.img`
  height: 20px;
  padding-left: 5px;
  cursor: pointer;
`;

export const HeaderImg = styled.img`
  height: 50px;
  padding-left: 5px;
`;

export const ViewButtonWrapper = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  position: absolute;
  top: 170px;
  left: 0px;
  z-index: 100;
  display: flex;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  background: white;
`;

export const ViewButton = styled.div<{ active: boolean }>`
  width: 70px;
  height: 40px;
  background-color: ${(props: any) =>
    props.active ? 'rgb(252,243,159)' : 'white'};
  border-radius: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 4px;
  font-size: 13px;
  cursor: pointer;
  color: ${(props: any) => (props.active ? 'black' : 'black')};
  box-shadow: 0px 1px 1px black;
`;
