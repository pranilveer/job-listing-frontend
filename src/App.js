import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
import Register from "./components/Register/register"
import AddJob from "./components/AddJob/AddJob";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path="/addJob" element={<AddJob />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
