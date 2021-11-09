import React, { useEffect, useState } from "react";
import axios from "axios";
// Hooks use Effect HOOk
function HooksUseEffect() {
  var [todos, setTodos] = useState([]);
  useEffect(() => {
    // Retrieve
    axios.get("http://localhost:3000/api/todos").then(({ data }) => {
      setTodos(data);
      console.log(data);
    });
    // axios
    //   .get("https://jsonplaceholder.typicode.com/posts/1/comments")
    //   .then(({ data }) => {
    //     console.log("this is comments only for test", data);
    //   });
  }, []);
  // Create
  function addData() {
    var todo = {
      completed: true,
      title: "halim todo",
      userId: 1,
    };
    axios
      .post("https://jsonplaceholder.typicode.com/todos", todo)
      .then(({ data }) => {
        console.log(data);
      });
  }
  // Delete
  function deletee() {
    var id = 1;
    axios
      .delete("https://jsonplaceholder.typicode.com/todos/" + id)
      .then((res) => {
        alert("deleted");
      });
  }
  
  // Update
  function update() {
    axios
      .put("https://jsonplaceholder.typicode.com/todos/1", {
        id: 1,
        completed: false,
        title: "updated todo",
        userId: 1,
      })
      .then(({ data }) => {
        console.log(data);
      });
  }

  //////// CRUD OPERTION /////////

  var list = todos.map((e, i) => <li key={i}>{e.title}</li>);

  return (
    <div>
      <button onClick={update}>
        update the first item with hard coded data
      </button>

      <button onClick={deletee}>delete the first item</button>

      <input />
      <button onClick={addData}>add hard coded todo</button>
      {list}
    </div>
  );
}

export default HooksUseEffect;
