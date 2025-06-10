import { useState } from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import data from './data/data'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Body data = {data.results}/>
      <Footer />
    </div>
  )
}

export default App
