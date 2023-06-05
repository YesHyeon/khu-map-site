import styled from '@emotion/styled';
import theme from '../../styles/theme';

export const MainContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 412px;
  height: 100vh;
  background-color: ${theme.colors.burgundy};
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
