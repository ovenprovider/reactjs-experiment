// Libraries
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Styles
import './App.css'

// Feature Components
import ToDo from './features/todo/screens/ToDo'
import Home from './features/home/Home'
import Blog from './features/blog/screens/Blog'

// Stores
import BlogStore from './features/blog/services/store/BlogStore'

const blogStore = new BlogStore()

const AppRoutes = () => (
  <Switch>
    <Route path="/blog">
      <Blog blogStore={blogStore} />
    </Route>
    <Route path="/todo" component={ToDo} />
    <Route exact path="/" component={Home} />
  </Switch>
)

const App: React.FC = () => {
  return (
    <div>
      <Router>{AppRoutes()}</Router>
    </div>
  )
}

export default App
