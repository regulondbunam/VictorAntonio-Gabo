import React from 'react'
import GsCcButtons from './components/gs_view_main/gs_cc_buttons'
import {Cover as GSccHead,Button,TextBox, Tabs, Card} from './ui-components/ui_components'

import styles from './components/gs_view_main/gs_cc_buttons.module.css';

const DocUiCya = () => {
  return (
    <div>
      <GSccHead  >
        <h1>Start Guide Front-End </h1>
      </GSccHead>
      
      <GsCcButtons />
      
    </div>
  )
}

export default DocUiCya;
