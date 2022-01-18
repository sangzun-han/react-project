import styled from "@emotion/styled";
import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
const Maker = ({ FileInput, authService, cardRepo }) => {
  const history = useHistory();
  const onLogout = useCallback(() => {
    authService.logout();
  }, [authService]);
  const historyState = history?.location?.state;
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(historyState && historyState.id);

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = cardRepo.syncCards(userId, (cards) => {
      setCards(cards);
    });

    return () => stopSync();
  }, [userId, cardRepo]);

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        history.push("/");
      }
    });
  }, [userId, authService, history]);

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    cardRepo.saveCard(userId, card);
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });

    cardRepo.removeCard(userId, card);
  };

  return (
    <Makers>
      <Header onLogout={onLogout} />
      <Container>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
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
  background-color: white;
`;

const Container = styled.div`
  display: flex;
  flex: 1;
  min-height: 0;

  @media screen and (max-width: 62rem) {
    flex-direction: column;
  }
`;
export default Maker;
