import AppWrapper from "Common/sidebarModal/AppWrapper/AppWrapper";
import React, { useEffect, useState } from "react";
import { Routes, useLocation } from "react-router-dom";
import AndroidWrapper from "./appdevList/AndroidWrapper";
import IOSwrapper from "./appdevList/IOSwrapper";
import ReactNativeWrapper from "./appdevList/ReactNativeWrapper";
import JavaWrapper from "./Backendlist/JavaWrapper";
import MongodbWrapper from "./Backendlist/MongodbWrapper";
import MySqlWrapper from "./Backendlist/MySqlWrapper";
import NodejsWrapper from "./Backendlist/NodejsWrapper";
import PythonWrapper from "./Backendlist/PythonWrapper";
import SpringBootWrapper from "./Backendlist/SpringBootWrapper";
import EthereumWrapper from "./blockchainList /EthereumWrapper";
import EtherscanWrapper from "./blockchainList /EtherscanWrapper";
import HyperledgerWrapper from "./blockchainList /HyperledgerWrapper";
import MistWrapper from "./blockchainList /MistWrapper";
import RemixWrapper from "./blockchainList /RemixWrapper";
import SolcWrapper from "./blockchainList /SolcWrapper";
import TiarionWrapper from "./blockchainList /TiarionWrapper";
import TruffleWrapper from "./blockchainList /TruffleWrapper";
import HadoopWrapper from "./dataengineerList/HadoopWrapper";
import HighChartsWrapper from "./dataengineerList/HighChartsWrapper";
import KafkaWrapper from "./dataengineerList/KafkaWrapper";
import PowerBiWrapper from "./dataengineerList/PowerBiWrapper";
import SparkWrapper from "./dataengineerList/SparkWrapper";
import TableauWrapper from "./dataengineerList/TableauWrapper";
import ChefWrapper from "./devopsList/ChefWrapper";
import DockerWrapper from "./devopsList/DockerWrapper";
import JenkinsWrapper from "./devopsList/JenkinsWrapper";
import NewRelicWrapper from "./devopsList/NewRelicWrapper";
import PolymerWrapper from "./devopsList/PolymerWrapper";
import PuppetLabsWrapper from "./devopsList/PuppetLabsWrapper";
import AngularWrapper from "./Frontendlist/AngularWrapper";
import BootsTrapWrapper from "./Frontendlist/BootsTrapWrapper";
import CssWrapper from "./Frontendlist/CssWrapper";
import HtmlWrapper from "./Frontendlist/HtmlWrapper";
import NextjsWrapper from "./Frontendlist/NextjsWrapper";
import ReactjsWrapper from "./Frontendlist/ReactjsWrapper";
import DigitalMarketting from "./markettingList/DigitalMarketting";
import SocialMediaMarketting from "./markettingList/SocialMediaMarketting";
import AppiumWrapper from "./testingList/AppiumWrapper";
import AutomationWrapper from "./testingList/AutomationWrapper";
import ProtractorWrapper from "./testingList/ProtractorWrapper";
import SeleniumWrapper from "./testingList/SeleniumWrapper";
import AdobeExperienceManagement from "./webcontentList/AdobeExperienceManagement";
import DrupalWrapper from "./webcontentList/DrupalWrapper";
const ServiceWrapper = () => {
  const [selectedRoute, setSelectedRoute] = useState("");
  const location = useLocation();
  useEffect(() => {
    const pageName = location.pathname.split("/")[1];
    setSelectedRoute(pageName);
  }, [location.pathname]);

  const renderRequiredCom = () => {
    switch (selectedRoute) {
      case "android":
        return <AndroidWrapper />;
      case "ios":
        return <IOSwrapper />;
      case "reactnative":
        return <ReactNativeWrapper />;
      case "java":
        return <JavaWrapper />;
      case "mongodb":
        return <MongodbWrapper />;
      case "mysql":
        return <MySqlWrapper />;
      case "nodejs":
        return <NodejsWrapper />;
      case "python":
        return <PythonWrapper />;
      case "springboot":
        return <SpringBootWrapper />;
      case "ethereum":
        return <EthereumWrapper />;
      case "etherscan":
        return <EtherscanWrapper />;
      case "hyperledger":
        return <HyperledgerWrapper />;
      case "mist":
        return <MistWrapper />;
      case "remix":
        return <RemixWrapper />;
      case "solc":
        return <SolcWrapper />;
      case "tiarion":
        return <TiarionWrapper />;
      case "truffle":
        return <TruffleWrapper />;
      case "hadoop":
        return <HadoopWrapper />;
      case "highcharts":
        return <HighChartsWrapper />;
      case "kafka":
        return <KafkaWrapper />;
      case "powerbi":
        return <PowerBiWrapper />;
      case "spark":
        return <SparkWrapper />;
      case "tableau":
        return <TableauWrapper />;
      case "chef":
        return <ChefWrapper />;
      case "docker":
        return <DockerWrapper />;
      case "jenkins":
        return <JenkinsWrapper />;
      case "newrelic":
        return <NewRelicWrapper />;
      case "polymer":
        return <PolymerWrapper />;
      case "puppetlabs":
        return <PuppetLabsWrapper />;
      case "angular":
        return <AngularWrapper />;
      case "bootstrap":
        return <BootsTrapWrapper />;
      case "css":
        return <CssWrapper />;
      case "html":
        return <HtmlWrapper />;
      case "nextjs":
        return <NextjsWrapper />;
      case "reactjs":
        return <ReactjsWrapper />;
      case "digitalmarkiting":
        return <DigitalMarketting />;
      case "social-media-markiting":
        return <SocialMediaMarketting />;
      case "appium":
        return <AppiumWrapper />;
      case "automation":
        return <AutomationWrapper />;
      case "protractor":
        return <ProtractorWrapper />;
      case "selenium":
        return <SeleniumWrapper />;
      case "adobe":
        return <AdobeExperienceManagement />;
      case "drupal":
        return <DrupalWrapper />;
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

export default ServiceWrapper;
