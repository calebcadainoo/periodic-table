import React from 'react'
import './App.css'
import AppMenu from './components/AppMenu'
import AppWorkArea from './components/AppWorkArea'
import NavBar from './components/NavBar'

function App() {
  return (
    <section className="App">
      <NavBar />
      <AppMenu />
      <AppWorkArea />
    </section>
  );
}

export default App;
