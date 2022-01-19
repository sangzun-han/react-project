import React, { memo, useRef, useState } from "react";
import styles from "../cardAddForm/cardAddForm.module.css";
import Button from "../button/button";
const CardAddForm = memo(({ FileInput, onAdd }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [file, setFile] = useState({ fileName: null, fileURL: null });

  const onFileChange = (file) => {
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  };

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
      fileName: file.fileName || "",
      fileURL: file.fileURL || "",
    };
    formRef.current.reset();
    setFile({ fileName: null, fileURL: null });
    onAdd(card);
  };
  return (
    <div className={styles.checkout}>
      <form ref={formRef} action="">
        <fieldset>
          <label className={styles.label} htmlFor="card-number">
            card number
          </label>
          <input
            className={[styles.input, styles.number].join(" ")}
            type="num"
            maxLength={4}
          />
          <input
            className={[styles.input, styles.number].join(" ")}
            type="num"
            maxLength={4}
          />
          <input
            className={[styles.input, styles.number].join(" ")}
            type="num"
            maxLength={4}
          />
          <input
            className={[styles.input, styles.number].join(" ")}
            type="num"
            maxLength={4}
          />
        </fieldset>

        <fieldset>
          <label className={styles.label} htmlFor="card-holder">
            card holder
          </label>
          <input className={[styles.input, styles.holder].join(" ")} />
        </fieldset>
        <div className={styles.flex}>
          <fieldset>
            <label className={styles.label} htmlFor="card-number">
              expiration date
            </label>

            <input className={[styles.input, styles.expiration].join(" ")} />
            <input className={[styles.input, styles.expiration].join(" ")} />
          </fieldset>

          <fieldset>
            <label className={styles.label} htmlFor="card-ccv">
              ccv
            </label>

            <input
              className={[styles.input, styles.ccv].join(" ")}
              maxLength={3}
            />
          </fieldset>
        </div>
      </form>
    </div>
  );
});

export default CardAddForm;
