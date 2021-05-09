import React from 'react';
import GsViewMain from '../components/gs_view_main';
import { useParams } from 'react-router';
import GsUiComponent from './gs_ui_component';

const GsCcBody = () => {  
  const {site} = useParams();
  console.log(site);
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