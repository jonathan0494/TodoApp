import React, { useState } from 'react'
import { TabManager } from './components/user_interface'

const TABS = [{ id: 0, title: 'Home' }, 
              { id: 1, title: 'Scheduled' }, 
              { id: 2, title: 'Pending' }, 
              { id: 3, title: 'Deleted' }]
function App() {
  return (
      <TabManager tabs={TABS}>
        <Home />
        <Scheduled />
        <Pending />
        <Deleted />
      </TabManager>
  )
}

const Home = () => <h2>Home</h2>;
const Scheduled = () => <h2>Scheduled</h2>;
const Pending = () => <h2>Pending</h2>;
const Deleted = () => <h2>Deleted</h2>;

export default App
