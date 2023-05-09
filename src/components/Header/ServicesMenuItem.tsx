import React, { useState } from "react";
import {
  appdevList,
  backendList,
  blockchainList,
  dataengineerList,
  devopsList,
  frontendList,
  markettingList,
  testingList,
  webcontentList,
} from "Common/constants";
import IHeader from "./Header.type";
import styles from "Styles/Header.module.css";

const ServicesMenuItem: React.FunctionComponent<IHeader>  = ({ menuItem }) => {
  const [subMenuList, setSubMenuList] = useState(backendList);
  const [menuItemActive, setMenuItemActive] = useState("");
  const [subMenuImageActive, setSubMenuImageActive] = useState("");
  // const [subMenuItemActive, setSubMenuItemActive] = useState("");

  const renderImage = (id: number, submenu: any) => {
    const menuimageActive = submenu.find((i: any) => i.id === id);
    setSubMenuImageActive(menuimageActive.Image);
  };

  const handleHoverMenuItem = (idx: number) => {
    switch (idx) {
      case 0:
        setSubMenuList(backendList);
        renderImage(1, backendList);
        break;
      case 1:
        setSubMenuList(frontendList);
        renderImage(1, frontendList);

        break;
      case 2:
        setSubMenuList(devopsList);
        renderImage(1, devopsList);

        break;
      case 3:
        setSubMenuList(testingList);
        renderImage(1, testingList);

        break;
      case 4:
        setSubMenuList(webcontentList);
        renderImage(1, webcontentList);
        break;
      case 5:
        setSubMenuList(dataengineerList);
        renderImage(1, dataengineerList);
        break;
      case 6:
        setSubMenuList(blockchainList);
        renderImage(1, blockchainList);
        break;
      case 7:
        setSubMenuList(appdevList);
        renderImage(1, appdevList);
        break;
      case 8:
        setSubMenuList(markettingList);
        renderImage(1, markettingList);
        break;
      default:
        setSubMenuList(backendList);
        renderImage(1, backendList);
        break;
    }
    // }
  };

  const handleHoverSubMenuItem = (e: any) => {
    console.log("hovered item:1111", e.target.getAttribute("id"));
    const subMenuImageActive:any = subMenuList.find(
      (i) => i.key === e.target.getAttribute("id")
    );
    setSubMenuImageActive(subMenuImageActive.Image);
  };

  return (
    <div className={styles.services_list}>
      <ul className={styles.dropdown_menu_list}>
        {menuItem.map((item:any, index:number) => {
          return (
            <li key={index} onMouseOver={() => handleHoverMenuItem(index)}>
              <img src={item.Image} />
              <a
                className={`${item.key} item ${
                  menuItemActive === item.id ? "active-item" : ""
                }`}
              >
                {item.value}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
    // <div className="col-xs-4 col-md-4 services-list">
    //   <ul className="dropdown-menu-list">
    //     {subMenuList.map((item, index) => {
    //       return (
    //         <li key={index} onMouseOver={handleHoverSubMenuItem}>
    //           <a
    //             className={` item ${
    //               subMenuItemActive === item.id ? "active-item" : ""
    //             }`}
    //             id={item.key}
    //             value={item.key}
    //             onMouseOver={() => setSubMenuItemActive(item.id)}
    //           >
    //             {item.value}
    //           </a>
    //         </li>
    //       );
    //     })}
    //   </ul>
    // </div>
    // <div className="col-xs-4 col-md-4 services-list">
    //   <ul className="dropdown-menu-list services-images">
    //     <li>
    //       <img src={subMenuImageActive} />
    //     </li>
    //   </ul>
    // </div>
  );
};

export default ServicesMenuItem;
