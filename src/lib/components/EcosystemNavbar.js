import React from 'react'
import giveth from '../assets/images/giveth-logo.svg'
import profile from '../assets/images/profile.png'

const EcosystemNavbar = () => {
  return (
    <div className="eco-main-navbar">
      <div className="giveth-logo">
        <img src={giveth} />
      </div>
      <div className="commons-dropdown">
        <p>Commons:</p>
        <p className="selected">Reforestation Indonesia</p>
      </div>
      <div className="nav-content">
        <p>Campaigns</p>
        <p>Voting</p>
        <p>FAQ</p>
        <p className="support">Support us</p>
      </div>
      <div className="profile">
        <p>
          You're making the real difference, <p className="selected">Kay</p>
        </p>
        <img src={profile} />
      </div>
    </div>
  )
}

EcosystemNavbar.propTypes = {
  // buttonName:
}

export default EcosystemNavbar
