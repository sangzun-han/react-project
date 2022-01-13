import React from "react";
import styled from "@emotion/styled";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Footer from "../footer/footer";
import Header from "../header/header";
const Login = ({ authService }) => {
  const onLogin = (event) => {
    const provider = event.currentTarget.textContent.split(" ").reverse()[0];
    authService //
      .login(provider)
      .then(console.log);
  };
  console.log(authService);
  return (
    <section>
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
    </section>
  );
};

const Section = styled.section`
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
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
  margin-bottom: 1rem;
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
