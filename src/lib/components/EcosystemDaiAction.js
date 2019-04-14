/**
 * Created by will on 10/04/19.
 */
import React from 'react'
import PrimaryButton from './PrimaryButton'

const EcosystemDaiAction = ({ buttonName, actionText, showDai }) => {
  return (
    <div className="eco-dai-action">
      <PrimaryButton name={buttonName} showDai />
      <p>{actionText}</p>
    </div>
  )
}

EcosystemDaiAction.propTypes = {
  // buttonName:
}

export default EcosystemDaiAction
