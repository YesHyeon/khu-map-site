import styled from '@emotion/styled';
import theme from '../../styles/theme';

export const MainContainer = styled.div<{ floor: number }>`
  position: absolute;
  left: 100px;
  bottom: ${(props: any) =>
    props.floor == 1 ? '105px' : props.floor == 2 ? '70px' : '10px'};
  width: 100px;
  height: 100px;
  border: 1px solid;
  justify-content: center;
  border-radius: 13px;
  box-shadow: 1px 1px 2px grey;
  background: white;
`;

export const TextContainer = styled.div`
  width: 100px;
  height: 30px;
  background: red;
`;
