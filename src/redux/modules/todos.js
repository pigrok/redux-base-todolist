import shortid from "shortid";

const initialState = [
  {
    id: shortid.generate(),
    title: "뉴스피드 프로젝트",
    body: "팀프로젝트 firebase, Redux 이용하기",
    isDone: false,
  },
  {
    id: shortid.generate(),
    title: "후발대 리액트",
    body: "타임어택 ToDoList 만들기",
    isDone: true,
  },
];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return [...state, action.payload];
    }

    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);

    case "SWITCH_TODO":
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isDone: !todo.isDone };
        } else {
          return todo;
        }
      });

    default:
      return state;
  }
};

export default todos;
