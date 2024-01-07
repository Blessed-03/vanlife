import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className='HomePage'>
        <div className="info">
            <h2>
                You got the travel plans, we got the travel vans.
            </h2>
            <p>
                Add adventure to your life by joining the #vanlife movement. Rent th perfect van to make your perfect road trip
            </p>
            <Link>
                Find your van
            </Link>
        </div>
    </div>
  )
}

export default Home