import React from 'react'
import './App.css'
import AppWorkArea from './components/AppWorkArea/AppWorkArea'
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <section className="App">
      <NavBar />
      <AppWorkArea />
    </section>
  );
}

export default App;
