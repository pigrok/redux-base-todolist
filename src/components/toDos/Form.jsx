import React, { useState } from "react";
import { useDispatch } from "react-redux";
import shortid from "shortid";

function Form() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const dispatch = useDispatch();
  return (
    <div>
      <form
        onSubmit={(e) => {
          if (!title || !body) {
            alert("필수값이 누락되었습니다. 확인해주세요.");
            return false;
          }
          e.preventDefault();

          dispatch({
            type: "ADD_TODO",
            payload: {
              id: shortid.generate(),
              title: title,
              body: body,
              isDone: false,
            },
          });

          setTitle("");
          setBody("");
        }}
      >
        <div>
          <label>title</label>
          <input
            text="text"
            name="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div>
          <label>body</label>
          <input
            text="text"
            name="body"
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          />
        </div>

        <button>submit</button>
      </form>
    </div>
  );
}

export default Form;
