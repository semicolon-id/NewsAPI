// import logo from "./logo.svg";
import "./App.css";

import Navbar from "./components/UI/Navbar/Navbar";

import LandingPage from "./components/LandingPage/LandingPage";
import Footer from "./components/UI/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
