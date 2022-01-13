import styled from "@emotion/styled";
import "./app.css";
import Login from "./components/login/login";

function App({ authService }) {
  return (
    <Wrapper>
      <Login authService={authService} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #626262;
`;
export default App;
