import styled from "@emotion/styled";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./app.css";
import Login from "./components/login/login";
import Maker from "./components/maker/maker";

function App({ authService, cardRepo }) {
  return (
    <Wrapper>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authService={authService} />
          </Route>
          <Route path="/maker">
            <Maker authService={authService} cardRepo={cardRepo} />
          </Route>
        </Switch>
      </BrowserRouter>
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
