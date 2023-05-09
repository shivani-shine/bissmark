import React from "react";
import styles from 'Styles/Header.module.css';
import Image from "next/image";
const ServicesMenuItemIcon = () => {
  console.log("service menu---");
  return (
    <div className={`col-xs-4 col-md-4 ${styles.services_list}`}>
      <div>
        <div className={styles.services_list_img}>
          <ul>
            <li>Appium</li>
            <li>
              <Image src="images/appium.png" alt="TS img here" />
            </li>
          </ul>
        </div>
        <div className={styles.services_list_img}>
          <ul>
            <li>Automation</li>
            <li>
              <Image src="images/auto.png" alt="TS img here" />
            </li>
          </ul>
        </div>
        <div className={styles.services_list_img}>
          <ul>
            <li>protractor</li>
            <li>
              <Image src="images/protractor.png" alt="TS img here" />
            </li>
          </ul>
        </div>
        <div className={styles.services_list_img}>
          <ul>
            <li>selenium</li>
            <li>
              <Image src="images/selenium.png" alt="TS img here" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServicesMenuItemIcon;
