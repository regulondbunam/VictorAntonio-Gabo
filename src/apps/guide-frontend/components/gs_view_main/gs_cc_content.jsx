import React from 'react'
import conf from '../../conf/gs_view_main.conf.json'
import GSCcMenu from '../gs_ui_component/gs_cc_menu';

import styles from './gs_cc_content.module.css';
// Extraxión del contenido del archivo JSON en una variable
const description = conf.gs_cc_buttons.description;

const GsCcContent = () => {
  return (
    
      // Mostrar contenido en una etiqueta parrafo y escapar las etiquetas html que pueda contener
      <p 
        className={styles.parrafos} dangerouslySetInnerHTML={
          {
            __html:description
          }
      }>        
      </p>
    
    
  )
}

export default GsCcContent;