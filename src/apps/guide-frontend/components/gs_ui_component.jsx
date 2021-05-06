import React from 'react';
import { useParams } from 'react-router';
import { Cover as GSccHead } from '../ui-components/ui_components';
import GsCcContent from './gs_ui_component/gs_cc_content';
import GSCcMenu from './gs_ui_component/gs_cc_menu';

export default function GsUiComponent() {

  const {id} = useParams();

  
  return (
    <>
      <GSccHead>
        {
          ( id == 1)
            ? <h1>User Interface Components </h1>
          :
             <h1>Create you RegulonDB App</h1>
        }
        
      </GSccHead>

      {
        (id == 1)
          && <GsCcContent />
      }
      
    </>
  )
}
