import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import LoginPage from "./page/LoginPage";
import Navbar from "./component/Navbar";
import { useState } from "react";
import PrivateRoute from "./route/PrivateRoute";

function App() {
  const [log, setLog] = useState("로그인");
  const [auth, setAuth] = useState(false);
  return (
    <div>
      <Navbar log={log} setLog={setLog} auth={auth} setAuth={setAuth} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/product/:id" element={<PrivateRoute auth={auth} />} />
        <Route
          path="/login"
          element={
            <LoginPage
              log={log}
              setLog={setLog}
              auth={auth}
              setAuth={setAuth}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
