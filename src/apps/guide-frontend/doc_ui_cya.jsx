import React from 'react';
import GsViewMain from './components/gs_view_main';
import { useParams } from 'react-router';
import { Cover as GSccHead } from './ui-components/ui_components';
import conf from './conf/gs_view_main.conf.json'

const DocUiCya = () => {
  const {site} = useParams();

  return (
    <div>
      <GSccHead>
        <h1>{site}</h1>
      </GSccHead>
       
    </div>
  )
}

export default DocUiCya;
