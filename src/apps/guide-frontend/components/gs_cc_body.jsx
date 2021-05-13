import React from 'react';
import GsViewMain from '../components/gs_view_main';
import GsUiComponent from './gs_ui_component';

const GsCcBody = ({ site }) => {  
  
  return (
    
    <>
    {
      ( site == undefined )
        && <GsViewMain/>      
    }

    {
      ( site == "ui-components")
        && <GsUiComponent />
    }
    
    {
      (site == "create-app")
        && <GsUiComponent />
    }
    </>
    
  )
}

export default GsCcBody