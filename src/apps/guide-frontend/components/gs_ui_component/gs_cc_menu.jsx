import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import MenuCSS from "./gs_cc_menu.module.css";



const GSCcMenu = (dataMenu) => {
  return dataMenu.menuElements.map((e) => {
    return <RecursiveComponent {...e} key={e.id} />;
  });
};

const RecursiveComponent = ({ id, title, value, sons }) => {
  const [isOpened, setIsOpened] = useState(true);

  let history = useHistory();

  function handleClick(value) {
    history.push(`/${value}`);
  }

  function toggle() {
    setIsOpened((wasOpened) => !wasOpened);
  }

  const hasChildren = (children) => children && children.length;

  return (
    <ul className={MenuCSS.listElements}>
      <li key={id}>
        <button className={MenuCSS.elements} onClick={toggle}>
          {title}
        </button>
      </li>

      {hasChildren(sons) &&
        sons.map((item) => (
          <li key={item.id}>
            {hasChildren(item.sons) == null && isOpened && (
              <ol className={MenuCSS.listElements}>
                <button
                  className={MenuCSS.link}
                  onClick={() => {
                    handleClick(item.value);
                  }}
                >
                  {item.title}
                </button>
              </ol>
            )}

            {hasChildren(item.sons) && (
              <RecursiveComponent key={item.id} {...item} />
            )}
          </li>
        ))}
    </ul>
  );
};

export default GSCcMenu;