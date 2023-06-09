import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Routes/Home";
import Paper from "./Routes/Paper";
import Notes from "./Routes/Notes";
import Labs from "./Routes/Labs";
import Navbar from "./Navbar";
import Login from "./Routes/Login";
import Signup from "./Routes/Signup";
import Sem1 from "../src/Notes/Sem1"
import Sem2 from "../src/Notes/Sem2"
import Sem3 from "../src/Notes/Sem3"
import Sem4 from "../src/Notes/Sem4"
import Sem5 from "../src/Notes/Sem5"
import Sem6 from "../src/Notes/Sem6"
import Semp6 from "../src/Paper/Sem6"
import Semp1 from "../src/Paper/Sem1"
import Semp2 from "../src/Paper/Sem2"
import Semp3 from "../src/Paper/Sem3"
import Semp4 from "../src/Paper/Sem4"
import Semp5 from "../src/Paper/Sem5"
import Seml5 from "../src/Labs/Sem5"
import Seml1 from "../src/Labs/Sem1"
import Seml2 from "../src/Labs/Sem2"
import Seml3 from "../src/Labs/Sem3"
import Seml4 from "../src/Labs/Sem4"
import Seml6 from "../src/Labs/Sem6"
import A from "./Notes/A";
import Ap from "./Paper/A";
import Al from "./Labs/A";

function App() {
  return (
    <div
      className="App"
      class=" overflow-hidden  mx-auto font-mullish  "
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
       
        <Route path="/paper" element={<Paper />}>
         
          <Route path="" element={<Ap/>} />
          <Route path="sem1" element={<Semp1/>} />
          <Route path="sem2" element={<Semp2/>} />
          <Route path="sem3" element={<Semp3/>} />
          <Route path="sem4" element={<Semp4/>} />
          <Route path="sem5" element={<Semp5/>} />
          <Route path="sem6" element={<Semp6/>} />
          
        </Route>
        <Route path="/notes" element={<Notes />}>
         
          <Route path="" element={<A/>} />
          <Route path="sem1" element={<Sem1/>} />
          <Route path="sem2" element={<Sem2/>} />
          <Route path="sem3" element={<Sem3/>} />
          <Route path="sem4" element={<Sem4/>} />
          <Route path="sem5" element={<Sem5/>} />
          <Route path="sem6" element={<Sem6/>} />
          
        </Route>
        {/* <Route path="/labs" element={<Labs />} /> */}
        <Route path="/labs" element={<Labs />}>
         
         <Route path="" element={<Al/>} />
         <Route path="sem1" element={<Seml1/>} />
         <Route path="sem2" element={<Seml2/>} />
         <Route path="sem3" element={<Seml3/>} />
         <Route path="sem4" element={<Seml4/>} />
         <Route path="sem5" element={<Seml5/>} />
         <Route path="sem6" element={<Seml6/>} />
         
       </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
