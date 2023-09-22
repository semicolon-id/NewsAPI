// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import Pages from "./Pages/Pages";
// import Login from "./components/Auth/Login"
// import LandingPage from "./components/LandingPage/LandingPage";
import Footer from "./components/UI/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Pages />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
