import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "../src/Components/Signup";
import Login from "../src/Components/Login";
import PasswordReset from "../src/Components/PasswordReset";
import PasswordUpdate from "../src/Components/PasswordUpdate";
// import "bootstrap/dist/css/bootstrap.css";

function App() {
  const url = "https://passwordreset-7ug1.onrender.com";

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login url={url} />}></Route>
        <Route path="/Signup" element={<Signup url={url} />}></Route>
        <Route
          path="/forgotpassword"
          element={<PasswordReset url={url} />}
        ></Route>
        <Route
          path="/passwordreset/:id"
          element={<PasswordUpdate url={url} />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
