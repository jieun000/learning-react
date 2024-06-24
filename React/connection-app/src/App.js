// import './App.css';
// import React, { useEffect, useState } from 'react';

// function App() {
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     fetch('http://localhost:3000/api/hello')
//       .then(response => response.text())
//       .then(data => setMessage(data));
//   }, []);

//   return (
//     <div>
//       <h1>{message}</h1>
//     </div>
//   );
// }

// export default App;



import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import Dashboard from './component/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
