import React from 'react'
import './Milestone.scss'

export class Milestone extends React.Component {
  render () {
    return (
      <div className="milestone">
        <MilestoneHeader/>
        <div className="milestone-body">
          <MilestoneInfo />
          <div>
            donations
          </div>
        </div>
      </div>
    )
  }
}

export class MilestoneHeader extends React.Component {
  render () {
    return (
      <div className="milestone-header">
        <div>
          <div>Planting seeds in South Indonesia Forests</div>
          <h1>Plant 100 trees</h1>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h2>
          <div class="milestone-header-buttons">
            <button>
            Nominate for commons funding
            </button>
            <button>
            Donate
            </button>
          </div>
          <div>
            Needs staking 100+ VIC tokens
          </div>
        </div>
      </div>
    )
  }
}

export class MilestoneInfo extends React.Component {
  render () {
    return (
      <div className="milestone-info">
        <div className="column">
          <h2>Description & Updates</h2>
          <div>User</div>
          <div>Description</div>
          <div>Created</div>
          <div>Nomination initiated</div>
          <div>Nomination Success</div>
        </div>
        <div className="column column-right">
          <h2>Details</h2>
          <div>Reviewer</div>
          <div>Fund</div>
          <div>Progress</div>
          <div>Milestone date</div>
        </div>
      </div>
    )
  }
}
