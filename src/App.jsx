import React, { useState } from 'react'
import Home from './components/Home';
import { TabManager } from './components/user_interface'
import TaskProvider from './contexts/TaskProvider';

const TABS = [{ id: 0, title: 'Home' }, 
              { id: 1, title: 'Scheduled' }, 
              { id: 2, title: 'Pending' }, 
              { id: 3, title: 'Deleted' }]
function App() {
  return (
    <TaskProvider>
      <TabManager tabs={TABS}>
          <Home />
          <Scheduled />
          <Pending />
          <Deleted />
      </TabManager>
      </TaskProvider>
  )
}

const Scheduled = () => <h2>Scheduled</h2>;
const Pending = () => <h2>Pending</h2>;
const Deleted = () => <h2>Deleted</h2>;

export default App
