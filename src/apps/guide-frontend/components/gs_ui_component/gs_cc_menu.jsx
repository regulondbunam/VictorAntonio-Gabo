import React from 'react'
import menu from '../../conf/gs_view_main.conf.json'

const menuElements = menu.menuElements;

const GSCcMenu = () => {
  const handle = (value) => {
    alert(value)
  }

  return (
    <div>
      {
        menuElements.map((e)=> {
          return MenuElement(e.id,e.title,e.value,e.sons,e.display,handle)
        })
      }
    </div>
  )
}

function MenuElement(id, title, value, sons, display=true, onClick){
  
  if(sons){
    return(
      <button key={id} onClick={()=>{onClick(value)}}>{title}
        {
          sons.map((e)=>{
            return MenuElement(e.id,e.title,e.value,e.sons,onClick)
          })
        }
      </button>
    )
  }
  return(
    <>
      <button key={id} onClick={()=>{onClick(display)}}>{title}</button>
    </>
  );
}

export default GSCcMenu

