import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Profile from "./pages/Profile/Profile";
import { ModalProvider } from "./context/modalContext";
// import Header from "./components/Header";
// import Sidenav from "./components/Sidenav";
import Greenhouse from "./pages/Greenhouse";

function App() {
  return (
    <ModalProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/greenhouse' element={<Greenhouse/>} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </div>
      </Router>
    </ModalProvider>
  );
}

export default App;
