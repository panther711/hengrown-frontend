import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import { ModalProvider } from "./context/modalContext";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <ModalProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/profile' element={<Profile/>} />
          </Routes>
        </div>
      </Router>
    </ModalProvider>
  );
}

export default App;
