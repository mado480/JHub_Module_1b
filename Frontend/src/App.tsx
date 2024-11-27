import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tabs from './components/Tabs'
import GetFloodData from './components/FloodData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <h1>Flood Warning App - JHub Module 1b</h1>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>This app was created for JHub Module 1b and is connected to 
          <a href="https://environment.data.gov.uk/flood-monitoring/doc/reference"> Environment Agency Real Time flood-monitoring API</a> .</p>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Tabs/>
      <GetFloodData/>
    </>
  )
}

export default App
