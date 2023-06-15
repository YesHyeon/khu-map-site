import styled from '@emotion/styled';
import theme from '../../styles/theme';

export const MainContainer = styled.div<{ floor: number }>`
  position: absolute;
  left: 110px;
  bottom: ${(props: any) =>
    props.floor == 1 ? '105px' : props.floor == 2 ? '70px' : '10px'};
  width: 150px;
  padding: 5px;
  height: ${(props: any) =>
    props.floor == 1 ? '320px' : props.floor == 2 ? '180px' : '10px'};
  border: 1px solid;
  justify-content: center;
  border-radius: 13px;
  box-shadow: 1px 1px 2px grey;
  background: rgba(255, 255, 255, 0.8);
`;

export const TextContainer = styled.div`
  width: 100%;
  height: 30px;

  white-space: pre-wrap;
`;
