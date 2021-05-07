import React, { Fragment } from 'react'
// Importación del componente gs_cc_button
import GsCcButton from './gs_cc_button';
// Importación del archivo JSON que contiene la información de los botones
import conf from '../../conf/gs_view_main.conf.json'
// Extracción de los estilos para los botones
import styles from './gs_cc_buttons.module.css';

const buttons = conf.gs_cc_buttons.buttons

function GsCcButtons() {
  return (
    <div className={styles.container}>
      {
        // Se recorre el array proveniente del archivo JSON y se convierte en un componente tiipo gs_cc_button
        buttons.map(button => (
          <GsCcButton 
            key={`button_main_${button.id}_${button.title}`} 
            title={button.title} 
            link={button.link}
            id={button.site}
            />
        ))
      
      }
    </div>
  )
}

export default GsCcButtons;