import styles from "../cardEditForm/cardEditForm.module.css";
import React from "react";
import Button from "../button/button";

const CardEditForm = ({ card, updateCard, deleteCard }) => {
  const {
    number1,
    number2,
    number3,
    number4,
    holder,
    year,
    month,
    theme,
    cvc,
  } = card;

  const onChange = (event) => {
    if (event.currentTarget == null) {
      return;
    } else {
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
    <div className={styles.checkout}>
      <form action="">
        <fieldset>
          <label className={styles.label} htmlFor="theme">
            테마
          </label>
          <select
            name="theme"
            placeholder="Theme"
            value={theme}
            onChange={onChange}
          >
            <option placeholder="gray">gray</option>
            <option placeholder="dark">dark</option>
            {/* <option placeholder="dark">모코코</option>
            <option placeholder="dark">긁자에요</option> */}
          </select>
        </fieldset>
        <fieldset>
          <label className={styles.label} htmlFor="card-number">
            card number
          </label>
          <input
            className={`${styles.input} ${styles.number}`}
            type="num"
            maxLength={4}
            name="number1"
            value={number1}
            onChange={onChange}
          />
          <input
            className={`${styles.input} ${styles.number}`}
            type="num"
            name="number2"
            maxLength={4}
            value={number2}
            onChange={onChange}
          />
          <input
            className={`${styles.input} ${styles.number}`}
            type="num"
            name="number3"
            maxLength={4}
            value={number3}
            onChange={onChange}
          />
          <input
            className={`${styles.input} ${styles.number}`}
            type="num"
            name="number4"
            maxLength={4}
            value={number4}
            onChange={onChange}
          />
        </fieldset>

        <fieldset>
          <label className={styles.label} htmlFor="card-holder">
            card holder
          </label>
          <input
            className={`${styles.input} ${styles.holder}`}
            name="holder"
            minLength={2}
            maxLength={12}
            value={holder}
            onChange={onChange}
          />
        </fieldset>
        <div className={styles.flex}>
          <fieldset>
            <label className={styles.label} htmlFor="card-number">
              expiration date
            </label>

            <select
              className={`${styles.input$} ${styles.expiration}`}
              name="year"
              value={year}
              onChange={onChange}
            >
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
            </select>
            <select
              className={`${styles.input$} ${styles.expiration}`}
              name="month"
              value={month}
              onChange={onChange}
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
              className={`${styles.input} ${styles.cvc}`}
              name="cvc"
              maxLength={3}
              value={cvc}
              onChange={onChange}
            />
          </fieldset>
        </div>

        <Button name="삭제" onClick={onSubmit} />
      </form>
    </div>
  );
};

export default CardEditForm;
