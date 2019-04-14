/**
 * Created by will on 10/04/19.
 */
import PropTypes from 'prop-types'
import React from 'react'
import dai from '../assets/images/dai.png'

const PrimaryButton = ({ name, onClick, showDai }) => (
  <button className="eco primary" onClick={onClick}>
    {showDai && <img src={dai} />}
    {name}
  </button>
)

PrimaryButton.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default PrimaryButton
