import { useRef, useEffect } from "react";

const InputWithLabel = ({todoTitle, handleTitleChange, isFocused, children}) => {
  const inputRef = useRef();

  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  });

  return (
    <>
      <input id="todoTitle" type="text" name="title" value={todoTitle} ref={inputRef} onChange={handleTitleChange} placeholder={children} required />
    </>
  );
};

export default InputWithLabel;
