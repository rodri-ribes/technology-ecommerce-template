import './App.scss';
import { Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar.js'
import Footer from './components/Footer/Footer.js'
import Home from './pages/Home/Home';

function App() {

  console.log("%c Template developed by Rodrigo Ribes", ' color: red; padding: 2rem; font-size: 1.5rem')
  console.log("%c Portfolio https://rodrigoribes.netlify.app/", ' color: blue; padding: 2rem 3rem; font-size: 1rem')

  return (
    <>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
