import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/index.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from './Index';
import Index2 from './Index2';

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <Provider store = {store}>
    <Router>
          <Routes>
            <Route path="/" element={<Index/>}></Route>
            <Route path="/q" element={<Index2/>}></Route>
          </Routes>
        </Router>
  </Provider>
  
)
