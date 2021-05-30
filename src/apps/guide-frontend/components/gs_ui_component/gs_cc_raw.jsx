import React, {useState, useEffect} from 'react'
import GsCcMarkdown from './gs_cc_markdown';

const GSCcRaw = () => {

  const [ data, setData ] = useState();

  useEffect(()=>{
    fetch('https://raw.githubusercontent.com/regulondbunam/Component-Repository/ui-components/ui-components/input/buttons/button.jsx')
      .then(response => response.text())
      .then(text => setData(text))
  })

  return (
    <div>
      <h2>Funciona</h2>
      
        <GsCcMarkdown txt={data}/>
    </div>
  )
}

export default GSCcRaw
