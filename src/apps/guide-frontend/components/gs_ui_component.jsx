import React from 'react';
import { useParams } from 'react-router';
import GsCcHead from '../gs_cc_head';
import GsCcContent from './gs_ui_component/gs_cc_content';

const GsUiComponent = () => {

  const {site} = useParams();

  
  return (
    <>
      <GsCcHead/>
      {
        (site == "ui-components")
          && <GsCcContent />
      }
      
    </>
  )
}

export default GsUiComponent