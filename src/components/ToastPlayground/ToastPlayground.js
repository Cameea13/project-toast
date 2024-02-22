import React from "react";
import ToastShelf from "../ToastShelf";
import Button from "../Button";
import styles from "./ToastPlayground.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";
import { useEscapeKey } from "../../hooks";
const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const {
    message,
    setMessage,
    variant,
    setVariant,
    toastList,
    handleClickX,
    handleSubmit,
  } = React.useContext(ToastContext);

  useEscapeKey();

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toasty Playground</h1>
      </header>

      <ToastShelf toastList={toastList} clickX={handleClickX} />

      <form onSubmit={handleSubmit}>
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: "baseline" }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                value={message}
                id="message"
                className={styles.messageInput}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((item) => {
                return (
                  <div key={item}>
                    <label htmlFor={`variant-${item}`}>
                      <input
                        id={`variant-${item}`}
                        type="radio"
                        name="variant"
                        checked={item === variant}
                        value={item}
                        onChange={(e) => {
                          setVariant(e.target.value);
                        }}
                      />
                      {item}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
