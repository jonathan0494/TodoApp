import React, { useState } from 'react'
import { Button, InputField } from './components/user_interface'

function App() {
  const [value, setValue] = useState('');
  return (
    <div>
      <InputField label="Name"
                  value={value}
                  error={{message: "WoOoOps an unexpected error has ocurred"}}
                  onChange={e => setValue(e.target.value)} />
      <InputField label="Please provide your address"
                  value={value}
                  onChange={e => setValue(e.target.value)} />
      <div style={{ display: 'flex', 
                    justifyContent: 'space-between', 
                    width: '500px',
                    margin: '20px'}}>
        <Button primary>Primary</Button>
        <Button warning>Warning</Button>
        <Button danger>Danger</Button>
      </div>
    </div>
  )
}

export default App
