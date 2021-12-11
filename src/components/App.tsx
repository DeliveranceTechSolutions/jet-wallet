import React from 'react';
import Content  from './Content';
import Nav from './Nav';
import './App.css';
import { Navbar } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Nav />
      <h1>Hello World</h1>
      <Content />
    </div>
  );
}

export default App;
