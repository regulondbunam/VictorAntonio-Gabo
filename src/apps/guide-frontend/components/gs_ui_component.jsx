import React from 'react';
import { Cover as GSccHead } from '../ui-components/ui_components';
import GsCcContent from './gs_ui_component/gs_cc_content';

export default function GsUiComponent({ prop }) {
  console.log( prop );
  return (
    <>
      <GSccHead>
        <h1>User Interface Components</h1>
      </GSccHead>

      <GsCcContent />
      
    </>
  )
}
