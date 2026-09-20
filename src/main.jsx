import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
//import "../node_modules/bootstrap/dist/css/bootstrap.css";
//import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
//import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

//import './index.css'
import App from './App.jsx'
import { Login } from './component/login/login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
  </StrictMode>,
)
