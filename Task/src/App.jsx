import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './Navbar'
import Home from './Home'
import Dashboard from './Dashboard'
import Sales from './Sales'
import Training from './Training'
import HR from './HR'
import Accounts from './Accounts'
import Scorecard from './Scorecard'
import History from './History'
import More from './More'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/training" element={<Training />} />
        <Route path="/hr" element={<HR />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/scorecard" element={<Scorecard />} />
        <Route path="/history" element={<History />} />
        <Route path="/more" element={<More />} />
      </Routes>
    </Router>
  )
}

export default App
