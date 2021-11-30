import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Invitados from "./pages/Invitados";
import Scanner from "./pages/Scanner";
import Staff from "./pages/Staff";
import Sidebar from "./components/Sidebar/Sidebar";
import Eventos from "./pages/Eventos"
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login.js";
import { useState } from "react";
import { useUser } from "./Hooks/useUser";

function App() {
  const [sidebar, setSidebar] = useState(true);

  const { user, SetUser } = useUser();
  const showSidebar = () => setSidebar(!sidebar);

  const LoginRoutes = () => {
    return (
      <div>
        <Sidebar sidebar={sidebar} showSidebar={showSidebar} />
        <Navbar showSidebar={showSidebar} SetUser={SetUser}/>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/eventos" element={<Eventos/>} />
          <Route path="/invitados" element={<Invitados />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/scanner" element={<Scanner />} />
          <Route path="*" element={<Navigate to="dashboard" />} />
        </Routes>
      </div>
    );
  };
  
  const LogoutRoutes = () => {
    return (
      <div>
        <Routes>
          <Route path="/login" element={<Login SetUser={SetUser} />} />
          <Route path="*" element={<Navigate to="login" />} />
        </Routes>
      </div>
    );
  };

  return (
    <BrowserRouter>
      {user ? <LoginRoutes></LoginRoutes> : <LogoutRoutes></LogoutRoutes>}
    </BrowserRouter>
  );
}

export default App;
