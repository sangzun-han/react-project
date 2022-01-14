import styled from "@emotion/styled";
import React from "react";
import Button from "../button/button";
import ImageFileInput from "../imageFileInput/imageFileInput";

const CardEditForm = ({ card }) => {
  const { name, company, title, email, message, theme, fileName, fileURL } =
    card;

  const onSubmit = () => {};
  return (
    <Form action="">
      <Input type="text" name="name" value={name} />
      <Input type="text" name="company" value={company} />
      <Select name="theme" value={theme}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </Select>
      <Input type="text" name="title" value={title} />
      <Input type="text" name="email" value={email} />
      <Textarea name="message" value={message}></Textarea>
      <FileInput>
        <ImageFileInput />
      </FileInput>
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

const FileInput = styled.div`
  padding: 0;
  background: linear-gradient(45deg, #ee9ca7, #ffdde1);
  flex: 1 1 50%;
`;
export default CardEditForm;
