import { Calendar } from "lucide-react"


export const TicketCards = ({ ticket, onClick }) => {
    return (
        <div onClick={() => onClick(ticket.id)}  className="bg-white p-4 rounded shadow cursor-pointer">
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-md font-bold">{ticket.title}</h3>
                <p
                    className={`${ticket.status === 'Open' ? 'bg-green-400' : ticket.status === 'In-Progress' ? 'bg-yellow-400' : 'bg-red-500'} text-white ml-2 w-fit px-3 py-1 rounded-full text-xs font-semibold`}
                >
                    <span className={`h-2 w-2 rounded-full inline-block mr-1 ${ticket.status === 'Open' ? 'bg-green-500' : ticket.status === 'In-Progress' ? 'bg-yellow-500' : 'bg-red-500'}`}></span> {ticket.status}
                </p>
            </div>
            <p className="text-gray-600">{ticket.description}</p>
            <div className="flex justify-between items-center mt-2">
                <div>
                    <span className="text-sm text-gray-500">{ticket.id}</span>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${ticket.priority === 'HIGH PRIORITY' ? 'text-red-500 ' : ticket.priority === 'MEDIUM PRIORITY' ? 'text-yellow-500' : 'text-green-500'}`}>
                        {ticket.priority}
                    </span>
                </div>
                <div className="flex items-center">
                 <span className="text-sm text-gray-500 mr-4">{ticket.assignee}</span>
                    <Calendar className="text-sm text-gray-500 mr-2" />
                    <span className="text-sm text-gray-500">{ticket.date}</span>
                </div>
            </div>
        </div>
    )
}


