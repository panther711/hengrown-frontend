import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import { ModalProvider } from "./context/modalContext";

function App() {
  return (
    <ModalProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
          </Routes>
        </div>
      </Router>
    </ModalProvider>
  );
}

export default App;
