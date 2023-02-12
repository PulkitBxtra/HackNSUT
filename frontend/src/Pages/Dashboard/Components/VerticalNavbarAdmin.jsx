import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../Admin/Card'


function VerticalNavbarAdmin() {
  return (
    <div className="grid grid-cols-4 min-h-screen">
      <aside className="col-span-1 bg-gray-800">
        <nav className="flex flex-col h-full text-gray-600 body-font">
          <Link to="/dashboard/admin/newentry" className="p-4 text-white hover:bg-gray-700">
            Make Entry
          </Link>
          <Link to="/dashboard/admin/viewentry" className="p-4 text-white hover:bg-gray-700">
            View Entries
          </Link>
          <Link to="/dashboard/admin/searchentry" className="p-4 text-white hover:bg-gray-700">
            Search Entry
          </Link>
          <Link to="/dashboard/admin/requestaccess" className="p-4 text-white hover:bg-gray-700">
            Request Access
          </Link>
          
        </nav>
      </aside>
      <main className="col-span-3 bg-gray-300 min-h-max">
        {/* Add your main content here */}

            

      </main>
    </div>

  )
}

export default VerticalNavbarAdmin