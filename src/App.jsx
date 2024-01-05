import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";

function App() {

  return (
   <div>
      <h1 className="text-3xl font-bold underline">Lets get Started!!!</h1>
      <Router> 
        <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route  path="/sign-in" element={<SignInForm />} />
        <Route  path="/sign-up" element={<SignUpForm />} />

          </Routes>   
      </Router>
   </div>
  )
}

export default App
