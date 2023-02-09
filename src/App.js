import { useState } from "react";
import "./App.css";

function TaskBox({ text }) {
  return <div className="box">{text}</div>;
}

function App() {
  let [taskList, setTaskList] = useState(["리액트를 배워봅시다"]);
  const onSubmitHandler = (event) => {
    event.preventDefault();
    let inputValue = event.target.contents.value;
    let newList = taskList.concat();
    newList.push(inputValue);
    setTaskList(newList);
    event.target.contents.value = "";
  };
  return (
    <div>
      <div id="header">
        <form onSubmit={onSubmitHandler}>
          <input type="text" name="contents" />
          <input type="submit" value="추가하기" />
        </form>
        <h1>Todo List</h1>
      </div>
      <div id="box-area">
        {taskList.map((one, i) => {
          return <TaskBox key={i} text={one}></TaskBox>;
        })}
      </div>
    </div>
  );
}

export default App;
