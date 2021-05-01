import React from 'react'
import { Cover as GSccHead } from '../ui-components/ui_components';
import GsCcButtons from './gs_view_main/gs_cc_buttons';
import GsCcContent from './gs_view_main/gs_cc_content';

const GsViewMain = () => {
  return (
    <>
      <GSccHead>
        <h1>Start Guide Front-End</h1>
      </GSccHead>

      <GsCcContent/>
      <GsCcButtons />

    </>

  )
}

export default GsViewMain
