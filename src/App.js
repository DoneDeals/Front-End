import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import ItemMgmtScreen from './screens/ItemMgmtScreen'

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/items' component={ItemMgmtScreen} exact />
        </Container>
      </main>
    </Router>
  )
}

export default App
