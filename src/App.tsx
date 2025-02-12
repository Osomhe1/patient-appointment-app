import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

function App() {

  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/appointments/:id" element={<Detail />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
