import styled from 'styled-components';
import { GlobalStyle } from './GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <AppWrapper className='App'>
        <h1>Hello Docker!</h1>
      </AppWrapper>
    </>
  );
}

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100%;
  font-size: 3rem;
  color: #fff;
  font-family: 'Lato', sans-serif;
  background-size: 100% 100%;
  background-image: linear-gradient(
    -45deg,
    rgba(59, 173, 227, 1) 0%,
    rgba(87, 111, 230, 1) 25%,
    rgba(152, 68, 183, 1) 51%,
    rgba(255, 53, 127, 1) 100%
  );
  animation: AnimateBG 20s ease infinite;
  @keyframes AnimateBG {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export default App;
