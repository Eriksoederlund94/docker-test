import styled from 'styled-components';

function App() {
  return (
    <AppWrapper className='App'>
      <h1>Hello Docker</h1>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100%;
  font-size: 4rem;
`;

export default App;
