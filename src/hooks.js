import React from "react";
import { ToastContext } from "./components/ToastProvider/ToastProvider";

export function useEscapeKey() {
  const { setToastList } = React.useContext(ToastContext);
  const handleEscapePress = React.useCallback(() => {
    setToastList([]);
  }, [setToastList]);

  React.useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        handleEscapePress();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [handleEscapePress]);
}
