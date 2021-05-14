import React from 'react';
import { Redirect } from 'react-router';
import GsViewMain from '../components/gs_view_main';
import GsUiComponent from './gs_ui_component';

const GsCcBody = ({ site }) => {  

  if (site != "create-app" && site != "ui-components" && site != undefined){
    return <Redirect to="/"/>
  }
  
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