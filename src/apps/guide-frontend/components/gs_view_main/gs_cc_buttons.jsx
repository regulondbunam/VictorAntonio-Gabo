import React, { Fragment } from 'react'
import GsCcButton from './gs_cc_button';
import conf from '../../conf/gs_view_main.conf.json'
import styles from './gs_cc_buttons.module.css';

const buttons = conf.gs_cc_buttons.buttons

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