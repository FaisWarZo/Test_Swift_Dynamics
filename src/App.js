import PageHome from "./page/home";
import PageTest1 from "./page/test1";
import PageTest3 from "./page/test3";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<PageHome />} />
      <Route path="/test1" element={<PageTest1 />} />
      <Route path="/test3" element={<PageTest3 />} />
    </Routes>
  );
}

export default App;
