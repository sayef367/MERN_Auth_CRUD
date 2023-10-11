import './App.css'
import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Index from './index'

function App() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap")
  },[])

  return (
    <>
      <Index />
    </>
  )
}

export default App
