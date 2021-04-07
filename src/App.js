import React from 'react'
import './App.css'
import AppWorkArea from './components/AppWorkArea/AppWorkArea'
import NavBar from './components/NavBar/NavBar'

function App() {
  console.log('BUILT WITH ❤️ BY: CALEB C. ADAINOO')
	console.log('Look Me Up @ https://github.com/calebcadainoo/')

  return (
    <section className="App">
      <NavBar />
      <AppWorkArea />
    </section>
  );
}

export default App;
