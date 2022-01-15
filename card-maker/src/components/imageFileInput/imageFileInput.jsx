import styled from "@emotion/styled";
import React, { useRef } from "react";

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const inputRef = useRef();
  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };

  const onChange = async (event) => {
    const uploaded = await imageUploader.upload(event.target.files[0]);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };
  return (
    <Container>
      <Input
        ref={inputRef}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />
      <Button onClick={onButtonClick}>{name || "No File"}</Button>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const Input = styled.input`
  display: none;
`;

const Button = styled.button`
  width: 100%;
  backgroud-color: black;
  font-weight: bold;
  border: 0;
  outline: 0;
  font-size: 0.8rem;

  &:hover {
    opacity: 0.8;
  }
`;

export default ImageFileInput;
