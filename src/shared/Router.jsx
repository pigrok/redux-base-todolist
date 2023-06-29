import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../redux/pages/Home";
import Detail from "../redux/pages/Detail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:id" element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
