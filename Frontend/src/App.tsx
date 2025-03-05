import './App.css'
import Tabs from './components/Tabs'
import GetFloodData from './components/FloodData'

function App() {

  return (
    <>
      <div>
        <h1>Flood Warning App - JHub Module 1b</h1>
      </div>
      <div className="card">
        <p>This app was created for JHub Module 1b and is connected to 
          <a href="https://environment.data.gov.uk/flood-monitoring/doc/reference"> Environment Agency Real Time flood-monitoring API</a> .</p>
      </div>
      
      <Tabs/>
      <GetFloodData/>
    </>
  )
}

export default App
