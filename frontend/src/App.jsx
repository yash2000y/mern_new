import { useState } from 'react'


import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateBook from './component/CreateBook'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreateBook />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
