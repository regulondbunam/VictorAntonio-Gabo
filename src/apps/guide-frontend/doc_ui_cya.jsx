import React from 'react';
import GsCcButtons from './components/gs_view_main/gs_cc_buttons';
import GsccContent from './components/gs_view_main/gs_cc_content';


import {Cover as GSccHead} from './ui-components/ui_components';

const DocUiCya = () => {
  return (
    <div>
      <GSccHead  >
        <h1>Start Guide Front-End </h1>
      </GSccHead>
      
      <GsCcButtons />

      <GsccContent />
      
      
    </div>
  )
}

export default DocUiCya;
