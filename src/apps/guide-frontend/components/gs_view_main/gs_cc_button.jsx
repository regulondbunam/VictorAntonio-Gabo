import React from 'react';
import { useHistory } from "react-router-dom";

import styles from './gs_cc_buttons.module.css';

function GsCcButton ({ title, id, link }) {
  // Uso del hook useHistory para navegar a una ruta
  let history = useHistory();
  function handleClick() {
    /*
      Las variables 'link' e 'id'  se reciben como PROPS de 'gs_cc_buttons.js' 
      y a us vez este los consulta del archivo JSON 'gs_cC_content'
    */
    history.push(`${link}/${id}`);
  }
  
  
  return (
    <button
      type="button"
      key={`button_main_${id}_${title}`}
      id={id}
      className={styles.btn}
      onClick={handleClick}
    >
      {title}
    </button>
  )
}
export default GsCcButton;