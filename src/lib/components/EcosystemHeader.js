import React from 'react'
import EcosystemDaiAction from './EcosystemDaiAction'
import EcosystemNavbar from './EcosystemNavbar'
import Givethers from './Givethers'

const EcosystemHeader = ({ title, subtitle, description, image }) => {
  return (
    <div>
      <EcosystemNavbar />
      <div
        className="eco-header"
        style={{ background: `url(${image})`, backgroundSize: 'cover' }}
      >
        <div className="eco-header-content">
          <h3>{subtitle}</h3>
          <h1>{title}</h1>
          <div className="description">
            <p>{description}</p>
          </div>
          <div className="row">
            <EcosystemDaiAction
              buttonName="Donate xDAI"
              actionText="1510 xDAI donated"
              showDAI
            />
            <Givethers count={488} />
          </div>
        </div>
        {/* <div className="eco-nav-bar">
          <button selected={true}>ABOUT CAMPAIGN</button>
          <button>MILESTONES</button>
          <button>COMMUNITY</button>
          <button>VOTING</button>
        </div> */}
      </div>
    </div>
  )
}

export default EcosystemHeader
