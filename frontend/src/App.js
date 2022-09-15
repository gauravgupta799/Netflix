import './App.scss';
import Home from './Pages/Home/Home'
import Watch from "./Pages/Watch/Watch"
import Register from './Pages/Register/Register'
import Login from './Pages/Login/Login'
import {BrowserRouter, Route,Routes,} from "react-router-dom";

function App() {
  // const user = false;
  const user = true;
  return (
    <div className="app">
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element=
          { user ? <Home /> : <Register/> } 
        />

        <Route path="/register" element=
          { !user ? <Register/> : <Home/> }
         />

        <Route path="/login" element=
        { !user ? <Login/> : <Register/> } />

        { user && (
          <>
            <Route path="/movies" element={<Home type="movie"/>} />
            <Route path="/series" element={<Home type="series"/>} />
            <Route exact path="/watch" element={<Watch/>} />
          </>
        )}

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
