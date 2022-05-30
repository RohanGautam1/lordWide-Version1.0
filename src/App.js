import Signup from './Components/Signup';
import SignIn from './Components/SignIn';
import Forgot from './Components/Forgot';
import './Css/Style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path='/' element={<Signup />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Forgot" element={<Forgot />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </Router>

    </>

  )
}

export default App;
