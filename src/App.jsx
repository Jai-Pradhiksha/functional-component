import { useState, useEffect } from 'react'
import React from 'react'

const App = () => {
  const [first, setfirst] = useState(0)
  const [second, setSecond] = useState(100)

  const getData = () => {
    console.log("data received")
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    console.log("First value changed")
  }, [first])
  
  return (
    <div>
      <h1>First : {first}</h1>
      <h1>Second : {second}</h1>
      <button onClick={() => setfirst((curr) => curr + 1)}>Add First</button>
      <button onClick={() => setSecond((curr) => curr + 1)}>Add Second</button>
      </div>
  )
}

export default App