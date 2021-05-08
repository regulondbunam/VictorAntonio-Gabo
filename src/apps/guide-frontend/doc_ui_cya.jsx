import React from 'react';
import GsViewMain from './components/gs_view_main';
import { useParams } from 'react-router';
import { Cover as GSccHead } from './ui-components/ui_components';
import conf from './conf/gs_view_main.conf.json'
import GsCcBody from './components/gs_cc_body';

const DocUiCya = () => {
  const {site} = useParams();

  return (
    <div>
    {
      (site == undefined)
        && 
          <GSccHead>
            <h1>Getting Started Guide</h1>
          </GSccHead>
    }
    {
      (site == "ui-components")
        && 
          <GSccHead>
            <h1>User Interface Components</h1>
          </GSccHead>
    }
    {
      (site == "create-app")
        && 
          <GSccHead>
            <h1>Create Your RegulonDB APP</h1>
          </GSccHead>
    }
      

      <GsCcBody />
       
    </div>
  )
}

export default DocUiCya;
