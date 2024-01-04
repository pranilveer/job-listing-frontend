import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
import Register from "./components/Register/register"
import AddJob from "./components/AddJob/AddJob";
import Header from './components/Home/Header';
import JobDetails from './components/Home/jobDetails';
import EditJob from "./components/EditJob/editJob"
import Error404 from "./components/NotFound/Error404";
import { Provider } from "./context/JobContext";

function App() {
  return (
    <Provider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={
                <>
                  <Header />
                  <Home />
                </>
              }
            />
            <Route path="/:id" element={
                <>
                  <Header />
                  <JobDetails />
                </>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/addJob" element={<AddJob />} />
            <Route path="/editJob/:id" element={<EditJob />} />
            <Route path="/404" element={<Error404 />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
