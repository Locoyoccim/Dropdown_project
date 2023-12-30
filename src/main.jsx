import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Navbar.jsx'
import App from './app.jsx'
import Footer from './footer.jsx'
import "/src/navbar.css";
import "/src/app.css";

import '/src/footer.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Footer />
  </React.StrictMode>,
)
