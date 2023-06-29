import React from "react";
import Header from "../../components/ui/Header";
import Form from "../../components/toDos/Form";
import List from "../../components/toDos/List";

function Home() {
  return (
    <div>
      <Header />
      <Form />
      <List />
    </div>
  );
}

export default Home;
