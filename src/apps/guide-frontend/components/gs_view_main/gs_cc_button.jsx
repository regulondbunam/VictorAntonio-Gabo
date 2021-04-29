import React from 'react';
import { useHistory } from "react-router-dom";

import styles from './gs_cc_buttons.module.css';

function GsCcButton ({ title, id, link }) {
  let history = useHistory();
  function handleClick() {
    history.push(link);
  }
  
  
  return (
    <button
      key={`button_main_${id}_${title}`}
      id=""
      className={styles.btn}
      onClick={handleClick}
    >
    {title}
    </button>
  )
}
export default GsCcButton;