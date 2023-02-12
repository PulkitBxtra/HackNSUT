import React from 'react'
import { Link } from 'react-router-dom'

function PendingRequests() {
  return (
    <div>
        
        <div className="grid grid-cols-4 min-h-screen">
      <aside className="col-span-1 bg-gray-800">
        <nav className="flex flex-col h-full text-gray-600 body-font">
          <Link to="/dashboard/user/logs" className="p-4 text-white hover:bg-gray-700">
            My Medical Records
          </Link>
          <Link to="/dashboard/user/pending" className="p-4 text-white hover:bg-gray-700">
            Pending Requests
          </Link>
          <Link to="/dashboard/user/authorised" className="p-4 text-white hover:bg-gray-700">
            Authorised Requests
          </Link>
          
        </nav>
      </aside>
      <main className="col-span-3 bg-gray-300 min-h-max">
        {/* Add your main content here */}

            

      </main>
    </div>


    </div>

  )
}

export default PendingRequests