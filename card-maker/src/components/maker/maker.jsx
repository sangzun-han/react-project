import styled from "@emotion/styled";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
const Maker = ({ authService }) => {
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });
  return (
    <Makers>
      <Header onLogout={onLogout} />
      <Container>
        <Editor />
        <Preview />
      </Container>
      <Footer />
    </Makers>
  );
};

const Makers = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex: 1;

  @media screen and (max-width: 62rem) {
    flex-direction: column;
  }
`;
export default Maker;
