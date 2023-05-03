import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Repository from "./pages/Repository";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exect path="/" element={<Main />} />
          <Route
            exact
            path="/repositorio/:repositorio"
            element={<Repository />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
