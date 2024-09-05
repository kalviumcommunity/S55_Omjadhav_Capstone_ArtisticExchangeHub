import { useState } from 'react'
 
import ChatBot from "react-chatbotify"
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const flow = {
    "start": {
      "message": "Hello world!"
    }
  }
  return (
    <>
      <div>
        ahslifu au
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ChatBot flow={flow}/>
    </>
  )
}

export default App