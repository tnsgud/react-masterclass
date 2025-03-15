import { IToDo } from "../atoms";

function ToDo({ text }: IToDo) {
  return (
    <li>
      <span>{text}</span>
      <span>Doing</span>
      <span>To DO</span>
      <span>Done</span>
    </li>
  );
}

export default ToDo;
