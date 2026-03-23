import { use, useState } from "react"
import { TicketCards } from "./TicketCards"
import { toast } from "react-toastify"


const tickets = fetch('/tickets.json').then(res => res.json())

export default function TicketSection({ data}) {  
const allTickets = use(tickets)
const [avilableTickets, setAvilableTickets] = useState(allTickets)


const [inProgress, setInProgress, resolved, setResolved] = data

const handleonclick = (id) => {
    const ticket = allTickets.find(ticket => ticket.id === id)
    inProgress.includes(ticket) ? showAlart("Ticket is already in progress") : setInProgress([...inProgress, ticket])
}


const handleComplete = (id) => {
    const ticket = inProgress.find(ticket => ticket.id === id)
    setInProgress(inProgress.filter(t => t.id !== id))
    setResolved([...resolved, ticket])
    setAvilableTickets(avilableTickets.filter(t => t.id !== id))
    toast.success("Ticket marked as resolved", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}


const showAlart = (message) => {
    toast.error(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}


  return (
    <div className="grid md:grid-cols-5 gap-4 p-4">
        <div className="md:col-span-4  p-4 rounded">
            <h2 className="text-lg font-bold mb-4">Customer Tickets</h2>
            <div className="grid md:grid-cols-2 gap-4">
                {avilableTickets?.map(ticket => (
                    <TicketCards key={ticket.id} ticket={ticket} onClick={handleonclick} />
                ))}
            </div>

        </div>
        <div className="md:col-span-1  p-4 rounded">
            <h2 className="text-lg font-bold mb-4">Ticket Status</h2>
            {inProgress.map(ticket => (
                <div key={ticket.id} className="bg-white p-4 rounded shadow mb-2">
                    <h3 className="text-md font-semibold mb-2">{ticket.title}</h3>
                    <button onClick={() => handleComplete(ticket.id)} className="bg-green-500 text-white px-3 py-1 rounded w-full cursor-pointer">Complete</button>
                </div>
            ))}

            <h2 className="text-lg font-bold mb-4 mt-4">Resolved Tasks</h2>
            {resolved.map(ticket => (
                <div key={ticket.id} className="bg-white p-4 rounded shadow mb-2">
                    <h3 className="text-md font-semibold mb-2">{ticket.title}</h3>
                </div>
            ))}
        </div>

    </div>
  )
}
