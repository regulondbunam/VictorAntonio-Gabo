import React from 'react'
import conf from '../../conf/gs_view_main.conf.json'

import styles from './gs_cc_content.module.css'
import GSCcMenu from './gs_cc_menu';

// Extraxión del contenido del JSON en una variable
const description = conf.gs_cc_buttons.description;

const GsCcContent = () => {
  return (
    <>

    <GSCcMenu />
      <p
        className={styles.parrafos}
        dangerouslySetInnerHTML={
          {
            __html:description
          }
      }>        
      
    </p>
    </>
  )
}

export default GsCcContent
