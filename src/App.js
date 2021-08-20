import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Post from './components/Post'

class App extends Component {
  render() {
  return (
    <BrowserRouter>
    <div className="App">
     <Navbar />
     
      <Route path='/home' exact component={About} />
      <Route path='/home/12' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
      <Route path="/posts/:post_id" component={Post} />
    
    </div>
    </BrowserRouter>
   );
  }
}

export default App;
