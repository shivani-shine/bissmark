import React, { useState } from "react";
import styles from 'Styles/Header.module.css';
import logo from "Assets/images/logo.png";
import Image from "next/image";
import { sideBarHandlerAction } from "Redux/appActions";
import { useDispatch } from "react-redux";
import { NextPage } from "next";
import { SHOW_SIDEBAR } from "Redux/types";
import { hireDeveloper } from "Common/constants";
import MobileHeader from "./MobileHeader";
import { serviceDeveloper } from "Common/constants";
import Link from "next/link";
import IHeader from "./Header.type"
const Header= () => {
  const dispatch = useDispatch();
  const subNavitemActive = [
    {
      id: 1,
      title: "About US",
      url: "/about-us",
    },
    {
      id: 2,
      title: "Our Process",
      url: "/our-process",
    },
    // {
    //   id: 3,
    //   title: "Careers",
    //   url: "/career",
    // },
  ];
  const [menuItemActive, setMenuItemActive] = useState();
  const [navItemActive, setNavItemActive] = useState(0);
  const [menuItemActive1, setMenuItemActive1] = useState(0);

  return (
    <>
      <div>
        <nav className={`navbar navbar-expand-lg ${styles.main_header} ${styles.desktopview}`}>
          <div className="container">
            {/* <Link href="/" className={styles.navbar_brand}>
             <Image  className={styles.img} src={logo} alt="logo" /> 
            </Link> */}
             <Link href="/">
             <Image src={logo} className={styles.img} alt="logo" /> 
            </Link>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className={`navbar-nav nav ms-auto ${styles.custom_nav}`}>
              <li className={styles.hire_dropdown}>
                  <Link
                    className={
                      navItemActive === 3 ? "link-hover active" : " link-hover"
                    }
                    onMouseOver={() => setNavItemActive(3)}
                   href="/"
                  >
                    Services
                    <i className="fa fa-angle-down" />
                  </Link>
                  <div className={`${styles.customDropdown} ${styles.full_wd}`}>
                    <div className={styles.hire_dropdown}>
                      {/* <h3>Hire Developers</h3> */}

                      <ul className={`${styles.dropdown_menu_list} ${styles.hire_row}`}>
                        {hireDeveloper.map((item) => {
                          return (
                            <li key={item.id}>
                              <Link
                               href={item.url}
                                className={`${
                                  navItemActive === 3
                                    ? "link-hover active"
                                    : " link-hover"
                                } $
                                //{
                                  // menuItemActive === item.id
                                  //   ? "active-item"
                                  //   : ""
                               // } 
                                `}
                                onClick={() => {
                                  setNavItemActive(3);
                                  // setMenuItemActive(item.id);
                                }}
                              >
                                <img src={item.Image} alt="icon"/>
                                {item.title}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </li>
                <li className={styles.hover_dropdown}>
                  <Link
                    href="/"
                    className={
                      navItemActive === 1 ? "link-hover active" : " link-hover"
                    }
                    onMouseOver={() => setNavItemActive(1)}
                  >
                    Free Guides
                    <i className="fa fa-angle-down" />
                  </Link>
                  {/* <div className={`${styles.customDropdown} ${styles.wwaMenu}`}>
                    <ul className={styles.dropdown_menu_list}>
                      {subNavitemActive.map((item) => {
                        return (
                          <li key={item.id}>
                            <Link
                              href={item.url}
                             className=
                             {
                                menuItemActive1 === item.id ? 
                               "active-item" 
                                 : ""
                               }
                             onClick={() => setMenuItemActive1(item.id)}
                               onMouseOver={() => setMenuItemActive1(item.id)}
                            >
                              {item.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div> */}
                </li>
                <li className={`${styles.hover_dropdown} ${styles.servicesitem}`}>
                  <Link
                    className={
                      navItemActive === 2 ? "link-hover active" : " link-hover"
                    }
                    onMouseOver={() => setNavItemActive(2)}
                    href="/why-us"
                  >
                    Why us
                    <i className="fa fa-angle-down" id="whoCaret" />
                  </Link>
                </li>
                
                {/* <li>
                  <Link
                    href="/blog"
                    className={
                      navItemActive === 4 ? "link-hover active" : " link-hover"
                    }
                    onMouseOver={() => setNavItemActive(4)}
                  >
                    Blog
                  </Link>
                </li> */}
                <li>
                  <Link
                    href="/contact"
                    className={
                      navItemActive === 5 ? "link-hover active" : " link-hover"
                    }
                    onMouseOver={() => setNavItemActive(5)}
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/login"
                    className={
                      navItemActive === 5 ? "link-hover active" : " link-hover"
                    }
                    onMouseOver={() => setNavItemActive(5)}
                  >
                    Login
                  </Link>
                </li>
                <li>
                  {/* <button
                    className={`${styles.Get_Quote} ${styles.toggleButton}`}
                   onClick={() => dispatch(sideBarHandlerAction(true))}
                  >
                    Get a Quote
                  </button> */}
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <MobileHeader /> 
      </div>
    </>
  );
};

export default Header;
