import React from 'react';
import './App.css';
import { LoginForm } from './components/SignUp/SignUp';

function App() {
  return (
    <div className="container">
      <header className="app-header">
        <h1 className="title">Sign Up Form</h1>
        <h3 className="sub-title">Sign Up using the below form</h3>
      </header>
      <main className="main-container">
        <LoginForm />
      </main>
    </div>
  );
}

export default App;
