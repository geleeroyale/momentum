/**
 * Created by will on 10/04/19.
 */
import React from 'react'
import aragon from '../assets/images/aragon.png'
import makerdao from '../assets/images/makerdao.png'

const Givethers = ({ count }) => (
  <div className="givethers">
    <p>🤗 {count} Amazing Givethers, including:</p>
    <img src={aragon} />
    <img src={makerdao} />
  </div>
)

export default Givethers
