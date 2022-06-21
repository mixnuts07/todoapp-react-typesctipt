// 追加(TODO)

import { RefObject } from "react";
export const TodoAdd = ({
  inputEL,
  handleAddTodoListItem,
  buttonText,
}: {
  inputEL: RefObject<HTMLTextAreaElement>;
  handleAddTodoListItem: () => void;
  buttonText: string;
}) => {
  return (
    <>
      <textarea ref={inputEL} />
      <button onClick={handleAddTodoListItem}>{buttonText}</button>
    </>
  );
};

export default TodoAdd;
