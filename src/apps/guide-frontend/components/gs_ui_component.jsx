import React from 'react';
import { useParams } from 'react-router';

import GsCcContent from './gs_ui_component/gs_cc_content';
import GSCcRaw from './gs_ui_component/gs_cc_raw';

const GsUiComponent = ({setState}) => {

  const {site} = useParams();

  return (
    <div>
   
      {
        (site == "ui-components")
          && <GsCcContent />          
      }
      {
        (site == "ui-components")
          && <GSCcRaw  setState={(state)=>{setState(state)}}/>       
      }
      
    </div>
  )
}

export default GsUiComponent