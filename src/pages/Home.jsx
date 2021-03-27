import React from 'react'
import './Home.css'
import { Link } from "react-router-dom";

import AppsIcon from "@material-ui/icons/Apps"
import { Avatar } from "@material-ui/core"
import Search from '../components/Search'

function Home() {
  return (
    <div className="home">
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


          {/* Icon*/}
          <AppsIcon />
          {/* Avatar */}
          <a href="https://github.com/ahmedbrh" target="_blank">  <Avatar alt="Ahmed brhili" src="https://avatars.githubusercontent.com/u/71940376?s=400&u=a4920d3c218733e66ea74e9f0abc4f72dcc3dcf6&v=4" /> </a>
        </div>
      </div>


      <div className="home__body">
        {/* google logo  */}
        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="google logo" />

        <div className="home__inputContainer">

          {/* Search components */}

          <Search />
        </div>

      </div>
      <div className="home__text"><p>Code disponible sur <a href="https://github.com/ahmedbrh/Google-clone-Using-API" target="_blank">Github</a> </p></div>
      <div className="home__textfooter"><p>2021-Template developped by <a href="https://www.linkedin.com/in/ahmed-brhili/" target="_blank">Ahmed Brhili</a>- just for fun !  <br /> -Build with - <a href="https://fr.reactjs.org/" target="_blank">React </a> </p></div>

    </div>


  )
}

export default Home
