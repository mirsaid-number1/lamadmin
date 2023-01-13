import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Context from './context/context';
import Second_Context from './context/second_context';
import AuthContext from './context/AuthContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Second_Context>
      <AuthContext>

      <App />
      </AuthContext>
    </Second_Context> 
  </React.StrictMode>
);

