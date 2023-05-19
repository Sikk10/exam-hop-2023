import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { EditIcon, DeleteIcon } from "./icons/icons";

function App() {
  const [list, setList] = useState([]);
  const [checkedCounter, setCheckedCounter] = useState(0);
  const [addTodo, setAddTodo] = useState("");

  const URL = "http://localhost:5000/";

  const Edit = (_id, text) => {
    const inputValue = window.prompt("Edit", text);
    if (!inputValue) return;

    console.log(inputValue);
    axios.patch(`${URL}update`, { id: _id, text: inputValue });
  };

  const Delete = (_id) => {
    console.log(_id);
    axios.delete(`${URL}delete/${_id}`);
  };

  const Add = () => {
    console.log(addTodo);
    axios.post(`${URL}add`, { text: addTodo });
  };

  const toggleDone = (_id, isDone) => {
    console.log(_id, isDone);
    axios.patch(`${URL}checked`, { id: _id, isDone: isDone });
  };

  useEffect(() => {
    axios
      .get(`${URL}list`)
      .then((res) => {
        // console.log(res.data.data);
        setList(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(`${URL}count`)
      .then((res) => {
        console.log(res.data.data.length);
        setCheckedCounter(res.data.data.length);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <div className="title">
        <div>My Todo list</div>
        <div className="count">
          {checkedCounter}/{list.length}
        </div>
      </div>
      <div className="list">
        {list.map(({ text, _id, isDone }, index) => (
          <div className="todo" key={index}>
            <div className="checkbox">
              <input
                type={"checkbox"}
                defaultChecked={isDone}
                onChange={(e) => {
                  toggleDone(_id, e.target.checked);
                }}
              />
              <div>{text}</div>
            </div>
            <div className="actions">
              <div onClick={() => Edit(_id, text)}>
                <EditIcon />
              </div>
              <div onClick={() => Delete(_id)}>
                <DeleteIcon />
              </div>
            </div>
          </div>
        ))}
        <input
          placeholder="what's next?"
          onChange={(e) => setAddTodo(e.target.value)}
        />
        <div className="button" onClick={() => Add()}>
          Add task
        </div>
      </div>
    </div>
  );
}

export default App;
