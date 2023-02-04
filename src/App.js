import "./styles/main.css"
import SignIN from "./pages/SignIN"
import SignUP from "./pages/SignUP"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Navigation/Nav";
import ScrollToTop from "./util/scrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Nav />
        
        <Routes>
          <Route path="/" element={<SignIN />} />
          <Route path="/SignUP" element={<SignUP/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
