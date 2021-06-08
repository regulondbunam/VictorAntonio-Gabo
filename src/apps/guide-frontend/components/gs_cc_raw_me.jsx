// FetchApi

import React, {useState, useEffect} from 'react'
import GsCcTreeMenu from './gs_cc_raw_me/gs_cc_tree_menu';

const GsCcRawME = () => {

  const [ data, setData ] = useState("");

  useEffect(()=>{
    if(data===""){
      try{
        fetch('https://raw.githubusercontent.com/regulondbunam/Component-Repository/ui-components/MenuElements.json')
      .then(response => response.json())
      .then(json => setData(json))
      }catch(e){
        console.error(e)
      }
    }else{
    }
  }, [data]);

  function hola(value) {
    alert(value);
  }

  return (
    <div>
    <h1></h1>
      {
        data==="" ? '' :
          <GsCcTreeMenu 
            dataMenu={data}
            onSelect={(value) => {
              hola(value);
            }}
          />
      }
    </div>
  )
}

export default GsCcRawME