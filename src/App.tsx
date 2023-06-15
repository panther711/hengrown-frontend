import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './pages/Signup/Signup';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/signup' element={<Signup/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
