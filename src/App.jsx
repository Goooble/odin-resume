import { useState } from 'react'
import PIEdit from './PIEdit'
import Resume from './Resume'

// import './App.css'

function App() {
  const [data, setData] = useState(
    {
      PI: {0:"", 1:"", 2:"", 3:""}
    }
  )
  return (
  <>
  <PIEdit data={data} setData={setData}></PIEdit>
  <Resume data={data}></Resume>
  </>
  )
}

export default App
