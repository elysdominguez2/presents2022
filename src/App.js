import "./App.css";

import ListOfPresents from "./pages/ListOfPresents";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ListOfPresents />} />
      </Routes>
    </div>
  );
}

export default App;
