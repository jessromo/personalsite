import "./App.css";
import Nav from "./components/Nav";
import Clients from "./components/Clients";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />} />
          <Route path="/clients" element={<Clients />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
