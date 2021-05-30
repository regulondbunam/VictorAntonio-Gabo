import React from 'react'
import conf from '../../conf/gs_view_main.conf.json'

import styles from './gs_cc_content.module.css'
//import GSCcMenu from './gs_cc_menu';



//const menuElements = conf.menuElements;

// Extraxión del contenido del JSON en una variable
const description = conf.gs_cc_buttons.description;

const GsCcContent = () => {
  return (
    <div className={styles.container}>

    {/* <div>
      <GSCcMenu { ...conf }/>
    </div> */}

    <div>
      <p
        className={styles.parrafos}
        dangerouslySetInnerHTML={
          {
            __html:description
          }
      }>        
      </p>
    </div>
    
    </div>
  )
}

export default GsCcContent
