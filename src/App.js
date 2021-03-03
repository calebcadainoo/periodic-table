import React from 'react'
import './App.css'
import AppMenu from './components/AppMenu/AppMenu'
import AppWorkArea from './components/AppWorkArea/AppWorkArea'
import NavBar from './components/NavBar/NavBar'

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
