import React from 'react';

import styles from './gs_cc_buttons.module.css';

function GsCcButton ({ title }) {
  console.log(title);
  return (
    <button
      id=""
      className={styles.btn}
    >
    {title}
    </button>
  )
}
export default GsCcButton;