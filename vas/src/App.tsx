import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./components/LoginScreen/Login";
import Navbar from "src/components/Navbar/Navbar";
import LoginPage from "src/pages/LoginPage";

import "src/styles/color.css";
import "react-phone-number-input/style.css";
import "./App.css";

function App() {
  return (
    <div className="App h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow overflow-y-auto">

      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </Router>
      </div>

    </div>
  );
}

export default App;
