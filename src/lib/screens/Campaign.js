import React from 'react'
import headerImage from '../assets/images/campaign-header.jpg'
import '../assets/styles/main.scss'
import { EcosystemHeader, Milestones } from '../index'

export default () => (
  <div>
    <EcosystemHeader
      title="Planting seeds in South Indonesia Forests"
      subtitle="CAMPAIGN"
      description="This is a description... Trying to make it long hello there!"
      image={headerImage}
    />
    <div className="milestones-wrapper">
      <Milestones />
    </div>
  </div>
)
