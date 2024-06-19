// src/index.tsx
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Layout from "./Layout";
import Counter from "./components/Counter";
import DashBoard from "./components/DashBoard";
import Login from "./components/Login";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="dashboard" element={<Layout />}>
        <Route index element={<DashBoard />} />
        <Route path="counter" element={<Counter />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById("app")!).render(<App />);
