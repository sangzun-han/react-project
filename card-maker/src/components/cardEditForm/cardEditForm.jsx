import styled from "@emotion/styled";
import React, { useRef } from "react";
import Button from "../button/button";

const CardEditForm = ({ FileInput, card, updateCard, deleteCard }) => {
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const { name, company, title, email, message, theme, fileName } = card;

  const onFileChange = (file) => {
    updateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    });
  };
  const onChange = (event) => {
    if (event.currentTarget == null) {
      return;
    } else {
      event.preventDefault();
      updateCard({
        ...card,
        [event.currentTarget.name]: event.currentTarget.value,
      });
    }
  };
  const onSubmit = (event) => {
    event.preventDefault();
    deleteCard(card);
  };

  return (
    <Form action="">
      <Input
        ref={nameRef}
        type="text"
        name="name"
        value={name}
        onChange={onChange}
      />
      <Input
        ref={companyRef}
        type="text"
        name="company"
        value={company}
        onChange={onChange}
      />
      <Select ref={themeRef} name="theme" value={theme} onChange={onChange}>
        <option value="gray">gray</option>
        <option value="dark">black</option>
      </Select>
      <Input
        ref={titleRef}
        type="text"
        name="title"
        value={title}
        onChange={onChange}
      />
      <Input
        ref={emailRef}
        type="text"
        name="email"
        value={email}
        onChange={onChange}
      />
      <Textarea
        ref={messageRef}
        name="message"
        value={message}
        onChange={onChange}
      ></Textarea>
      <FileWraper>
        <FileInput name={fileName} onFileChange={onFileChange} />
      </FileWraper>
      <Button name="Delete" onClick={onSubmit} />
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  border-top: 1px solid black;
  border-left: 1px solid black;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  font-size: 0.8rem;
  width: 100%;
  border: 0;
  padding: 0.5rem;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  background: white;
  flex: 1 1 30%;

  &:focus {
    outline: 0;
  }
`;

const Select = styled.select`
  font-size: 0.8rem;
  width: 100%;
  border: 0;
  padding: 0.5rem;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  background: white;
  flex: 1 1 30%;

  &:focus {
    outline: 0;
  }
`;

const Textarea = styled.textarea`
  font-size: 0.8rem;
  width: 100%;
  border: 0;
  padding: 0.5rem;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  background: white;
  flex-basis: 100%;

  &:focus {
    outline: 0;
  }
`;

const FileWraper = styled.div`
  padding: 0;
  background: linear-gradient(45deg, #ee9ca7, #ffdde1);
  flex: 1 1 50%;
`;
export default CardEditForm;
