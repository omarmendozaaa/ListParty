import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Eventos from "./pages/Eventos";
import Invitados from "./pages/Invitados";
import Scanner from "./pages/Scanner";
import Staff from "./pages/Staff";
import Sidebar  from "./components/Sidebar/Sidebar"
import Navbar from "./components/Navbar/Navbar";
import { useLocalStorage } from "./Helpers/useLocalStorage";
import { useState } from "react";

function App() {
  const [sidebar, setSidebar] = useState(true);
  const [IdEvento, setIdEvento] = useLocalStorage('IdEvento',1);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <BrowserRouter>
    <Sidebar sidebar={sidebar} showSidebar={showSidebar}/>
    <Navbar showSidebar={showSidebar} setIdEvento={setIdEvento}/>
      <Routes>
        <Route path="/" element={<Dashboard IdEvento={IdEvento}/>}/>
        <Route path="/eventos" element={<Eventos/>}/>
        <Route path="/invitados" element={<Invitados/>}/>
        <Route path="/staff" element={<Staff/>}/>
        <Route path="/scanner" element={<Scanner/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
