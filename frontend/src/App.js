import React from 'react';
import {About, Footer, Skills,Testimonial,Header,Work} from './container';
import {Navbar} from './components';
import './App.scss';

// shortcut: rafce to create react code skeleton

const App = () => {
  return (
    <div className='app'>
        <Navbar/>
        <Header/>
        <About/>
        <Work/>
        <Skills/>
        <Testimonial/>
        <Footer/>
    </div>
  )
}

export default App;