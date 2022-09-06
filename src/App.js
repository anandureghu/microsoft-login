import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Navigate to={'/signin'}/>}/>
        <Route path="/signin" element={<Login/>}/>
        <Route path="/dashboard" element={<DashboardPage/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
