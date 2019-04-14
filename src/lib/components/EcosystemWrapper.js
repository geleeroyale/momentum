/**
 * Created by will on 09/04/19.
 */
import React from 'react';
import EcosytemHeader from './EcosystemHeader';
import { UserProvider } from '../context/User';
import { AugmentedCurveProvider } from '../context/AugmentedCurve';

const EcosystemWrapper = ({ children }) => {
  return (
    <UserProvider>
      <AugmentedCurveProvider>
        <div>
          <EcosytemHeader/>
          {children}
        </div>
      </AugmentedCurveProvider>
    </UserProvider>
  )
};

export default EcosystemWrapper;