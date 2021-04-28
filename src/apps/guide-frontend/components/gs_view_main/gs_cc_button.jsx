import React from 'react';

import styles from './gs_cc_buttons.module.css';

function GsCcButton ({ title, id, link }) {
  console.log(title);
  return (
    <button
      key={`button_main_${id}_${title}`}
      id=""
      className={styles.btn}
    >
    {title}
    </button>
  )
}
export default GsCcButton;