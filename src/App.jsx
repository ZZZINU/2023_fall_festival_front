// App.jsx

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/mainpage/mainpage";
import About from "./pages/about/about";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
