import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "sangzun",
      company: "Samsung",
      theme: "dark",
      title: "Software Engineer",
      email: "hsjun1996@kyonggi.ac.kr",
      message: "go for it",
      fileName: "sangzun",
      fileURL: null,
    },

    {
      id: "2",
      name: "sangzun",
      company: "Samsung",
      theme: "light",
      title: "Software Engineer",
      email: "hsjun1996@kyonggi.ac.kr",
      message: "go for it",
      fileName: "sangzun",
      fileURL: null,
    },

    {
      id: "3",
      name: "sangzun",
      company: "Samsung",
      theme: "colorful",
      title: "Software Engineer",
      email: "hsjun1996@kyonggi.ac.kr",
      message: "go for it",
      fileName: "sangzun",
      fileURL: null,
    },
  ]);
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
        <Editor cards={cards} />
        <Preview cards={cards} />
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
