import React from 'react';
import { useParams } from 'react-router';

import GsCcBody from './components/gs_cc_body';
import GsCcHead from './gs_cc_head';

const DocUiCya = () => {
  const {site} = useParams();

  return (
    <div>
    <GsCcHead />
      

      <GsCcBody />
       
    </div>
  )
}

export default DocUiCya;
