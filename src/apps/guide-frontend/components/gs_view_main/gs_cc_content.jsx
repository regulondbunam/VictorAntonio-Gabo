import React from 'react'
import conf from '../../conf/gs_view_main.conf.json'

const description = conf.gs_cc_buttons.description;

const GsccContent = () => {
  return (
    <p dangerouslySetInnerHTML={
      {
        __html:description
      }
    }>
      
    </p>
  )
}

export default GsccContent;