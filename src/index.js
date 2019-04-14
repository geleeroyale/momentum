import { useStore } from 'laco-react'
import React from 'react'
import { render } from 'react-dom'
import './lib/assets/styles/main.scss'
import Campaign from './lib/screens/Campaign'
import Commons from './lib/screens/Commons'
import Milestone from './lib/screens/Milestone'
import { NavStore } from './lib/stores/navigation'

const App = () => {
  const { state } = useStore(NavStore)

  return (
    <div>
      {state === 'commons' && <Commons />}
      {state === 'campaign' && <Campaign />}
      {state === 'milestone' && <Milestone />}
    </div>
  )
}

render(<App />, document.getElementById('root'))
