import styled from "@emotion/styled";
import React, { useRef } from "react";
import Button from "../button/button";
import ImageFileInput from "../imageFileInput/imageFileInput";

const CardAddForm = ({ onAdd }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();

    const card = {
      id: Date.now(),
      name: nameRef.current.value || "",
      company: companyRef.current.value || "",
      theme: themeRef.current.value,
      title: titleRef.current.value || "",
      email: emailRef.current.value || "",
      message: messageRef.current.value || "",
      fileName: "",
      fileURL: "",
    };
    formRef.current.reset();
    onAdd(card);
  };
  return (
    <Form ref={formRef} action="">
      <Input ref={nameRef} type="text" name="name" placeholder="Name" />
      <Input
        ref={companyRef}
        type="text"
        name="company"
        placeholder="Company"
      />
      <Select ref={themeRef} name="theme" placeholder="Theme">
        <option placeholder="light">light</option>
        <option placeholder="dark">dark</option>
        <option placeholder="colorful">colorful</option>
      </Select>
      <Input ref={titleRef} type="text" name="title" placeholder="title" />
      <Input ref={emailRef} type="text" name="email" placeholder="email" />
      <Textarea
        ref={messageRef}
        name="message"
        placeholder="message"
      ></Textarea>
      <FileInput>
        <ImageFileInput />
      </FileInput>
      <Button name="Add" onClick={onSubmit} />
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
export default CardAddForm;
