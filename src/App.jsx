
import { useState } from 'react'
import './App.css'
import Nav from './components/nav/Nav'
import { NumberCounting } from './components/numberCounting/NumberCounting'
import TicketSection from './components/ticketSection/TicketSection'
import { ToastContainer } from 'react-toastify'
import { Footer } from './components/footer/Footer'

function App() {

  const [inProgress, setInProgress] = useState([])
  const [resolved, setResolved] = useState([])

  console.log(inProgress)

  return (
    <>
      <Nav />
      <NumberCounting inProgress={inProgress} resolved={resolved} />
      <TicketSection data={[inProgress, setInProgress, resolved, setResolved]} />

      <Footer />
      <ToastContainer/>
    </>
  )
}

export default App
