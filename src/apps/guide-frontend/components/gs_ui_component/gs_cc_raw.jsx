import React, {useState, useEffect} from 'react'
import GsCcMarkdown from './gs_cc_markdown';

import styles from './gs_cc_raw.module.css';

const GSCcRaw = ({setState}) => {

  const [ data, setData ] = useState("");

  useEffect(()=>{
    if(data===""){
      setState("loading")
      try{
        fetch('https://raw.githubusercontent.com/regulondbunam/Component-Repository/ui-components/ui-components/input/buttons/button.jsx')
      .then(response => response.text())
      .then(text => setData(text))
      }catch(e){
        console.error(e)
        setState("error")
      }
    }else{
      setState("done")
    }
  }, [data])

  const inicio = `/**`;
  const final = `**/`;

  let cleanData = data.substring(data.indexOf(inicio)+3, data.indexOf(final));

  const segundoMD = data.substring(data.indexOf(inicio,data.indexOf(inicio)+3)+3, data.indexOf(final,data.indexOf(final)+3) );

  const mostrarMarkdown = () => {
    document.querySelector('#premio').style.display = 'block';
    document.querySelector('#button').style.display = 'none';
  }


  return (
    <div className={styles.container}>
      {
        data==="" ? '' :
          <GsCcMarkdown txt={cleanData}/>
          // Segundo MarkDown
      }
      <button
        id="button"
        onClick={ mostrarMarkdown } 
        className={styles.button}>
        See more
      </button>
      <div id="premio" style={{display:'none'}}>

      <hr style={{height:'2px',border:'none', backgroundColor:'#3d779b', borderRadius:'10px'}}/>

      {
        data==="" ? '' :
        <GsCcMarkdown txt={segundoMD}/>
      }
      </div>
    </div>
  )
}

export default GSCcRaw
