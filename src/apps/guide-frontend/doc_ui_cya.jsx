import React from 'react'
import GsCcButtons from './components/gs_view_main/gs_cc_buttons'

import {MainRouter} from './MainRouter'

import {Cover as GSccHead} from './ui-components/ui_components'

const DocUiCya = () => {
  return (
    <div>
      <GSccHead  >
        <h1>Start Guide Front-End </h1>
      </GSccHead>
      
      <GsCcButtons />
      
      
      <MainRouter />
      
      
    </div>
  )
}

export default DocUiCya;
