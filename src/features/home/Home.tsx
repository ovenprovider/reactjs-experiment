// Libraries
import React from 'react'
import { Link } from 'react-router-dom'

import logo from './../../logo.svg'
import './../../App.css'

const Home: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Home page</p>
        <Link to="/todo">Todo List</Link>
        <Link to="/blog">Blog</Link>
      </header>
    </div>
  )
}

export default Home
