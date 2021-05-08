import React from 'react';
import { useParams } from 'react-router';
import { Cover as GSccHead } from '../ui-components/ui_components';
import GsCcContent from './gs_ui_component/gs_cc_content';

export default function GsUiComponent() {

  const {site} = useParams();

  
  return (
    <>
      
        {
          ( site == "ui-components")
            && 
            <GSccHead>
              <h1>User Interface Components </h1>
            </GSccHead>
        }
      
        {
          ( site == "create-app")
          && 
          <GSccHead>
            <h1>Create you RegulonDB App</h1>
          </GSccHead>
        }
        
      

      {
        (site == "ui-components")
          && <GsCcContent />
      }
      
    </>
  )
}
