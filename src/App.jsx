
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from './Index';
import Index2 from './Index2';

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route path="/" element={<Index/>}></Route>
            <Route path="/q" element={<Index2/>}></Route>
          </Routes>
        </Router>
    </>
  )
}

export default App
