import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import todos from "../modules/todos";
import { useSelector } from "react-redux";

function Detail() {
  const { id } = useParams();
  const toDos = useSelector((state) => state.todos);

  const todo = toDos.find((todo) => todo.id === id);

  const navigate = useNavigate();

  return (
    <div>
      <div key={todo.id}>
        <p>{todo.id}</p>
        <p>{todo.title}</p>
        <p>{todo.body}</p>
        <p>{todo.isDone.toString()}</p>
        <button style={{ width: "100px", height: "50px", margin: "15px" }} onClick={() => navigate("/")}>
          이전 화면으로
        </button>
      </div>
    </div>
  );
}

export default Detail;
