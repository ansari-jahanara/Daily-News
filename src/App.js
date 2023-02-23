import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Newscard from "./Components/Newscard";
// import SideSection from "./Components/SideSection";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <Router>
    <Nav/>
     <div className="container">
     <div className="row">
      {/* <Newscard/> */}
     <Routes>
      <Route path="/" element={<Newscard/>}></Route>
     </Routes>
      {/* <SideSection/> */}
      </div>
 </div>
 <Footer/>
 </Router>

   
 </>
  );
}

export default App;
