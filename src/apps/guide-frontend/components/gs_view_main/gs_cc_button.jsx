import React from 'react';
import { useHistory } from "react-router-dom";

import styles from './gs_cc_buttons.module.css';

function GsCcButton ({ title, id, link, props, content }) {
  let history = useHistory();
  function handleClick() {
    history.push(`${link}/${id}`);
  }
  
  
  return (
    <button
      type="button"
      key={`button_main_${id}_${title}`}
      id={id}
      className={styles.btn}
      onClick={handleClick}
      content={content}
    >
      {title}
    </button>
  )
}
export default GsCcButton;