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

  const mostrarMarkdown = () => {
    document.querySelector('#MostrarMD').style.display = 'block';
    document.querySelector('#buttonMostrar').style.display = 'none';
    document.querySelector('#buttonOcultar').style.display = 'block';
  }

  const ocultarMarkdown = () => {
    document.querySelector('#MostrarMD').style.display = 'none';
    document.querySelector('#buttonMostrar').style.display = 'block';
    document.querySelector('#buttonOcultar').style.display = 'none';
  }

  const inicio = `/**`;
  const final = `**/`;

  let cleanData = data.substring(data.indexOf(inicio)+3, data.indexOf(final));
  
  let segundoMD = data.substring(data.indexOf(inicio,data.indexOf(inicio)+3)+3, data.indexOf(final,data.indexOf(final)+3) );


  return (
    <div className={styles.container}>
      {
        data === "" ? '' : 
        
        data.includes('/**') ? <GsCcMarkdown txt={cleanData} />
        : <GsCcMarkdown txt={data} />
        
      }

      <div id="MostrarMD" style={{display:'none'}}>
        <hr style={{height:'2px',border:'none', backgroundColor:'#3d779b', borderRadius:'10px'}}/>

        {
          data === "" ? '' : 
        
            data.includes('/**') ? <GsCcMarkdown txt={segundoMD} />
            : '' 
        }

        
      </div>
      {
        data === "" ? '' :
        data.includes('/**') ?
        <button
          id="buttonMostrar"
          onClick={ mostrarMarkdown } 
          className={styles.buttonMostrar}>
          See more
        </button>
        : ''
      }
      

        <button
          id="buttonOcultar"
          onClick={ ocultarMarkdown } 
          className={styles.buttonOcultar}>
          See less
        </button>
    </div>
  )
}

export default GSCcRaw