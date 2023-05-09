import React, {  useState } from "react";
import styles from "Styles/Header.module.css";
import ServicesMenuItem from "./ServicesMenuItem";
import IHeader from "./Header.type"
const menuItem= [
  {
    id: 1,
    key: "BE",
    value: "Back End Technologies",
    Image: "images/headerIcon/servicesIcon/back.svg",
  },
  {
    id: 2,
    key: "FE",
    value: "Front End Technologies",
    Image: "images/headerIcon/servicesIcon/front.svg",
  },
  {
    id: 3,
    key: "DEVOPS",
    value: "DevOps and Cloud",
    Image: "images/headerIcon/servicesIcon/devops.svg",
  },
  {
    id: 4,
    key: "TS",
    value: "Testing",
    Image: "images/headerIcon/servicesIcon/testing.svg",
  },
  {
    id: 5,
    key: "WEBCONTENT",
    value: "Web Content Management",
    Image: "images/headerIcon/servicesIcon/contect.svg",
  },
  {
    id: 6,
    key: "DATAENGINEER",
    value: "Data Engineering",
    Image: "images/headerIcon/servicesIcon/data.svg",
  },
  {
    id: 7,
    key: "BLOCKCHAIN",
    value: "Blockchain",
    Image: "images/headerIcon/servicesIcon/blockchain.svg",
  },
  {
    id: 8,
    key: "APPDEV",
    value: "Mobile App Development",
    Image: "images/headerIcon/servicesIcon/mobileapp.svg",
  },
  // {
  //   id: 9,
  //   key: "MARKETTING",
  //   value: "Digital Marketing",
  //   Image: "images/headerIcon/servicesIcon/marketing.svg",
  // },
];

const ServicesMenu: React.FunctionComponent<IHeader>  = (IHeader) => {
  // const dispatch = useDispatch();
  const [selectedItem, setSelectedItem] = useState("");

  return (
    <div className={styles.services_wrapper}>
      <ServicesMenuItem menuItem={menuItem} setSelectedItem={setSelectedItem} />
    </div>
  );
};

export default ServicesMenu;
