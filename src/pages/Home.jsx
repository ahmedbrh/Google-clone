import React from 'react'
import './Home.css'
import { Link } from "react-router-dom";
import MicIcon from '@material-ui/icons/Mic';

function Home() {
  return (
    <div>


      <div className="home__header">

        <div className="home__headerLeft">
          {/* Link */}
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>

        </div>
        <div className="home__headerRight">
          <Link to="/gmail">Gmail</Link>
          {/* Link */}
          <Link to="/images">Images</Link>
        </div>
        {/* Link */}
        {/* Link */}
        {/* Icon*/}
        {/* Avatar */}

      </div>


      <div className="home__body">




      </div>
    </div>


  )
}

export default Home
