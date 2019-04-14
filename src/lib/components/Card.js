import React from 'react'
import donations from '../assets/images/donations.svg'
import givers from '../assets/images/givers.svg'
import { changeState } from '../stores/navigation'

const Card = ({ title, description, giversCount, donationsCount, image }) => {
  return (
    <div className="eco-card" onClick={() => changeState('campaign')}>
      <div style={{ background: `url(${image})`, backgroundSize: 'cover' }}>
        <div>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
      <div>
        <div className="field">
          <img src={givers} />
          {giversCount} Givers
        </div>
        <div className="field">
          <img src={donations} />
          {donationsCount} Donations
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  // buttonName:
}

export default Card
