import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Main from './components/Main.js'

class App extends React.Component {
  render() {
  return (
    <div classNAme="App">
      <Header/>      

      <Main/>

      <Footer/>  
      </div>
    );
  }
}

export default App;