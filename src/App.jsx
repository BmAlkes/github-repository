import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Repository from "./pages/Repository";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/repository/:repository" element={<Repository />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
