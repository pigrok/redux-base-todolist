import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function List() {
  const toDos = useSelector((state) => {
    return state.todos;
  });

  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <h2>TODOLIST</h2>
        <div>
          {toDos
            .filter((todo) => todo.isDone === false)
            .map((todo) => {
              return (
                <div key={todo.id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
                  <Link to={`/${todo.id}`}>Detail</Link>
                  <p>{todo.id}</p>
                  <p>{todo.title}</p>
                  <p>{todo.body}</p>
                  <p>{todo.isDone.toString()}</p>
                  <button
                    onClick={() => {
                      dispatch({
                        type: "SWITCH_TODO",
                        payload: todo.id,
                      });
                    }}
                  >
                    complete
                  </button>
                  <button
                    onClick={() => {
                      dispatch({
                        type: "DELETE_TODO",
                        payload: todo.id,
                      });
                    }}
                  >
                    delete
                  </button>
                </div>
              );
            })}
        </div>
        <h2>DONELIST</h2>
        <div style={{ border: "1px solid black" }}>
          {toDos
            .filter((todo) => todo.isDone === true)
            .map((todo) => {
              return (
                <div key={todo.id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
                  <Link to={`/${todo.id}`}>Detail</Link>
                  <p>{todo.id}</p>
                  <p>{todo.title}</p>
                  <p>{todo.body}</p>
                  <p>{todo.isDone.toString()}</p>
                  <button
                    onClick={() => {
                      dispatch({
                        type: "SWITCH_TODO",
                        payload: todo.id,
                      });
                    }}
                  >
                    cancel
                  </button>
                  <button
                    onClick={() => {
                      dispatch({
                        type: "DELETE_TODO",
                        payload: todo.id,
                      });
                    }}
                  >
                    delete
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default List;
