import React, { memo, useRef, useState } from "react";
import styles from "../cardAddForm/cardAddForm.module.css";
import Button from "../button/button";
const CardAddForm = memo(({ onAdd }) => {
  const formRef = useRef();
  const number1 = useRef();
  const number2 = useRef();
  const number3 = useRef();
  const number4 = useRef();
  const holderRef = useRef();
  const themeRef = useRef();
  const yearRef = useRef();
  const monthRef = useRef();
  const cvcRef = useRef();
  const onSubmit = (event) => {
    event.preventDefault();

    const card = {
      id: Date.now(),
      theme: themeRef.current.value,
      number1: number1.current.value || "",
      number2: number2.current.value || "",
      number3: number3.current.value || "",
      number4: number4.current.value || "",
      holder: holderRef.current.value || "",
      year: yearRef.current.value || "",
      month: monthRef.current.value || "",
      cvc: cvcRef.current.value || "",
    };

    formRef.current.reset();
    onAdd(card);
  };
  return (
    <div className={styles.checkout}>
      <form ref={formRef} action="">
        <fieldset>
          <label className={styles.label} htmlFor="theme">
            테마
          </label>
          <select ref={themeRef} name="theme" placeholder="Theme">
            <option placeholder="gray">gray</option>
            <option placeholder="dark">dark</option>
            <option placeholder="dark">모코코</option>
            <option placeholder="dark">긁자에요</option>
          </select>
        </fieldset>
        <fieldset>
          <label className={styles.label} htmlFor="card-number">
            card number
          </label>
          <input
            ref={number1}
            className={[styles.input, styles.number].join(" ")}
            type="num"
            maxLength={4}
          />
          <input
            ref={number2}
            className={[styles.input, styles.number].join(" ")}
            type="num"
            maxLength={4}
          />
          <input
            ref={number3}
            className={[styles.input, styles.number].join(" ")}
            type="num"
            maxLength={4}
          />
          <input
            ref={number4}
            className={[styles.input, styles.number].join(" ")}
            type="num"
            maxLength={4}
          />
        </fieldset>

        <fieldset>
          <label className={styles.label} htmlFor="card-holder">
            card holder
          </label>
          <input
            ref={holderRef}
            className={[styles.input, styles.holder].join(" ")}
            minLength={2}
            maxLength={12}
          />
        </fieldset>
        <div className={styles.flex}>
          <fieldset>
            <label className={styles.label} htmlFor="card-number">
              expiration date
            </label>

            <select
              ref={yearRef}
              className={[styles.input, styles.expiration].join(" ")}
            >
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
            </select>
            <select
              ref={monthRef}
              className={[styles.input, styles.expiration].join(" ")}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </fieldset>

          <fieldset>
            <label className={styles.label} htmlFor="card-ccv">
              cvc
            </label>

            <input
              ref={cvcRef}
              className={[styles.input, styles.ccv].join(" ")}
              maxLength={3}
            />
          </fieldset>
        </div>

        <Button name="카드 생성:)" onClick={onSubmit} />
      </form>
    </div>
  );
});

export default CardAddForm;
