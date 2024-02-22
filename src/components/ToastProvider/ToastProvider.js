import React from "react";
export const ToastContext = React.createContext({});

function ToastProvider({ children }) {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState("");
  const [toastList, setToastList] = React.useState([]);
  const [toastId, setToastId] = React.useState(1);

  //remove Toast from ToastList
  function handleClickX(idX) {
    const currToastList = [...toastList];
    const newToastList = currToastList.filter((item) => item.id !== idX);
    setToastList(newToastList);
  }

  ////add Toast to ToastList
  function handleSubmit(e) {
    e.preventDefault();
    const currToast = {
      message: message,
      variant: variant,
      id: toastId,
    };
    const nextList = [...toastList, currToast];
    setToastList(nextList);
    setToastId(toastId + 1);
    setMessage("");
    setVariant("");
  }

  const value = {
    message,
    setMessage,
    variant,
    setVariant,
    toastList,
    setToastList,
    toastId,
    setToastId,
    handleClickX,
    handleSubmit,
  };

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
