import React from 'react';
import { useParams } from 'react-router';

import GsCcContent from './gs_ui_component/gs_cc_content';

const GsUiComponent = () => {

  const {site} = useParams();

  
  return (
    <>
      {
        (site == "ui-components")
          && <GsCcContent />
      }
      
    </>
  )
}

export default GsUiComponent