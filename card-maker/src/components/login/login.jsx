import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Footer from "../footer/footer";
import Header from "../header/header";
import { useHistory } from "react-router-dom";
const Login = ({ authService }) => {
  const history = useHistory();
  const goToMaker = (uid) => {
    history.push({
      pathname: "/maker",
      state: { id: uid },
    });
  };

  const onLogin = (event) => {
    const provider = event.currentTarget.textContent.split(" ").reverse()[0];
    authService //
      .login(provider)
      .then((data) => goToMaker(data.user.uid));
  };

  useEffect(() => {
    authService //
      .onAuthChange((user) => {
        user && goToMaker(user.uid);
      });
  });

  return (
    <Article>
      <Header />
      <Section>
        <LoginTitle>Login</LoginTitle>
        <ul>
          <li>
            <Google onClick={onLogin}>
              <FcGoogle size={"1.5rem"} />
              Sign in with Google
            </Google>
          </li>
          <li>
            <Github onClick={onLogin}>
              <FaGithub size={"1.5rem"} />
              Sign in with Github
            </Github>
          </li>
        </ul>
      </Section>
      <Footer />
    </Article>
  );
};

const Article = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Section = styled.section`
  width: 30em;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
`;

const LoginTitle = styled.h1`
  font-size: 3rem;
`;

const Google = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: white;
  border: thin solid #888;
  border-radius: 5px;
  width: 240px;
  height: 50px;
  padding: 1rem;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`;

const Github = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: white;
  border: thin solid #888;
  border-radius: 5px;
  width: 240px;
  height: 50px;
  padding: 1rem;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`;
export default Login;
