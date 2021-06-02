import React, {useState, useEffect} from 'react'
import GsCcMarkdown from './gs_cc_markdown';
import { Modal } from '../../ui-components/ui_components';

const GSCcRaw = () => {

  const [ data, setData ] = useState("");

  useEffect(()=>{
    fetch('https://raw.githubusercontent.com/regulondbunam/Component-Repository/ui-components/ui-components/input/buttons/button.jsx')
      .then(response => response.text())
      .then(text => setData(text))
  }, [data])

  const inicio = `/**`;
  const final = `**/`;

  let cleanData = data.substring(data.indexOf(inicio)+3, data.indexOf(final));


  return (
    <div>
    <h1></h1>
      {
        data==="" ? 'Cargando...' :
          <GsCcMarkdown txt={cleanData}/>

      }
    </div>
  )
}

export default GSCcRaw
