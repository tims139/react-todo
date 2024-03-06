import { useRef, useEffect } from "react";

const InputWithLabel = ({
  todoTitle,
  handleTitleChange,
  isFocused,
  children,
}) => {
  const inputRef = useRef();

  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  });

  return (
    <>
      <label htmlFor="todoTitle">{children}</label>
      <input
        id="todoTitle"
        type="text"
        name="title"
        value={todoTitle}
        ref={inputRef}
        onChange={handleTitleChange}
      />
    </>
  );
};

export default InputWithLabel;
