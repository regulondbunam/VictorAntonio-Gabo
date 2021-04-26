import React, { Fragment } from 'react'
import GsCcButton from './gs_cc_button';

import styles from './gs_cc_buttons.module.css';

const buttons = [
  {
    id: 1,
    title: 'UI-component',
  },
  {
    id: 2,
    title: 'Create Your App', 
  }
]

function GsCcButtons() {
  return (
    <div className={styles.container}>
      {
        buttons.map(button => (
          <GsCcButton title={button.title} />
        ))
      }
    </div>
  )
}

export default GsCcButtons;