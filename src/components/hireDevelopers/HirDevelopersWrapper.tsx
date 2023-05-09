import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AppWrapper from "Common/sidebarModal/AppWrapper/AppWrapper";
// import routes, { newRoutes } from "../utils/routes";
import HireWebDevelopers from "./HireWebDeveloper";
import HireDevelopers from "./HireDevelopers";
import HireSoftwareDeveloper from "./HireSoftwareDeveloper";
import HireFullStackDeveloper from "./HireFullStackDeveloper";
import HireUiDesigner from "./HireUiDesigner";
import HireDataScientist from "./HireDataScientist";
import BlockChainDeveloper from "./BlockChainDeveloper";
import AndroidAppDeveloper from "./AndroidAppDeveloper";
import IOSDeveloper from "./IOSDeveloper";
import FlutterDeveloper from "./FlutterDeveloper";
import ReactNativeDeveloper from "./ReactNativeDeveloper";
import IonicDeveloper from "./IonicDeveloper";
import JavaDeveloper from "./JavaDeveloper";
import AngularJsDeveloper from "./AngularJsDeveloper";
import ReactJsDeveloper from "./ReactJsDeveloper";
import VueJsDeveloper from "./VueJsDeveloper";
import PHPDeveloper from "./PHPDeveloper";
import PythonDeveloper from "./PythonDeveloper";
import GolangDeveloper from "./GolangDeveloper";
import SolidityDeveloper from "./SolidityDeveloper";
import WordPressDeveloper from "./WordpressDeveloper";
import HireSwiftDeveloper from "./HireSwiftDeveloper";
import HireLotSolution from "./HireLotSolution";
import DjangoDevelopers from "./DjangoDevelopers";
import HireNodejsDeveloper from "./HireNodejsDeveloper";
import HireKotlinDevelopers from "./HireKotlinDevelopers";
import SpringBootDevelopers from "./SpringBootDevelopers";

const HireDevelopersWrapper = () => {
  const [selectedRoute, setSelectedRoute]: any = useState("");
  const location: any = useLocation();

  // console.log("location", location);

  useEffect(() => {
    const pageName = location.pathname.split("/")[1];
    setSelectedRoute(pageName);
  }, [location.pathname]);

  const renderRequiredCom = () => {
    switch (selectedRoute) {
      case "hire-app-developer":
        return <HireDevelopers />;
      case "hire-web-developer":
        return <HireWebDevelopers />;
      case "hire-software-developer":
        return <HireSoftwareDeveloper />;
      case "hire-full-stack-developer":
        return <HireFullStackDeveloper />;
      case "hire-us-ui-designer":
        return <HireUiDesigner />;
      case "hire-data-scientist":
        return <HireDataScientist />;
      case "hire-blockchain-developer":
        return <BlockChainDeveloper />;
      case "hire-android-developer":
        return <AndroidAppDeveloper />;
      case "hire-ios-developer":
        return <IOSDeveloper />;
      case "hire-flutter-developer":
        return <FlutterDeveloper />;
      case "hire-react-native-developer":
        return <ReactNativeDeveloper />;
      case "hire-ionic-developer":
        return <IonicDeveloper />;
      case "hire-Java-developer":
        return <JavaDeveloper />;
      case "hire-angularJS-developer":
        return <AngularJsDeveloper />;
      case "hire-react-JS-developer":
        return <ReactJsDeveloper />;
      case "hire-vuejs-developer":
        return <VueJsDeveloper />;
      case "hire-php-developer":
        return <PHPDeveloper />;
      case "hire-python-developer":
        return <PythonDeveloper />;
      case "hire-golang-developer":
        return <GolangDeveloper />;
      case "hire-solidity-developer":
        return <SolidityDeveloper />;
      case "hire-wordpress-developer":
        return <WordPressDeveloper />;
      case "hire-swift-developer":
        return <HireSwiftDeveloper />;
      case "hire-Iot-solution":
        return <HireLotSolution />;
      case "hire-django-developer":
        return <DjangoDevelopers />;
      case "hire-nodejs-developer":
        return <HireNodejsDeveloper />;
      case "hire-kotlin-developer":
        return <HireKotlinDevelopers />;
      case "hire-springboot-developer":
        return <SpringBootDevelopers />;
      default:
        return "Hello world";
    }
  };
  return (
    <AppWrapper>
      <div>{renderRequiredCom()}</div>
    </AppWrapper>
  );
};

export default HireDevelopersWrapper;
