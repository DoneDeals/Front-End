import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
<<<<<<< HEAD
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
=======
import ItemMgmtScreen from './screens/ItemMgmtScreen'
>>>>>>> SJFE_ItemMgmt

export default function App() {
  return (
    <Router>
      <Header />
      <main className='py-5'>
        <Container>
          <Route path='/' component={HomeScreen} exact />
<<<<<<< HEAD
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/profile' component={ProfileScreen} />
=======
          <Route path='/items' component={ItemMgmtScreen} exact />
>>>>>>> SJFE_ItemMgmt
        </Container>
      </main>
    </Router>
  )
}
