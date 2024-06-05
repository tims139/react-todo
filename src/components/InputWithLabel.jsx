import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

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

InputWithLabel.propTypes = {
  todoTitle: PropTypes.string.isRequired,
  handleTitleChange: PropTypes.func.isRequired,
  isFocused: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default InputWithLabel;
