import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AppWrapper from "Common/sidebarModal/AppWrapper/AppWrapper";
import Appdeveloper from "./Appdeveloper";
import BackendDeveloper from "./BackendDeveloper";
import BlockchainDevelopers from "./BlockchainDevelopers";
import DataEngineerDeveloper from "./DataEngineerDeveloper";
import DevopsDeveloper from "./DevopsDeveloper";
import FrontendDeveloper from "./FrontendDeveloper";
import MarketingDeveloper from "./MarketingDeveloper";
import TestingDeveloper from "./TestingDeveloper";
import WebcontentDeveloper from "./WebcontentDeveloper";

const ServicesWrapper = () => {
  const [selectedRoute, setSelectedRoute] = useState("");
  const location = useLocation();

  useEffect(() => {
    const pageName = location.pathname.split("/")[1];
    setSelectedRoute(pageName);
  }, [location.pathname]);

  const renderRequired = () => {
    switch (selectedRoute) {
      case "backend-developer":
        return <BackendDeveloper />;
      case "app-developer":
        return <Appdeveloper />;
      case "blockchain-developer":
        return <BlockchainDevelopers />;
      case "data-engineer-developer":
        return <DataEngineerDeveloper />;
      case "devops-developer":
        return <DevopsDeveloper />;
      case "frontend-developer":
        return <FrontendDeveloper />;
      case "marketing-developer":
        return <MarketingDeveloper />;
      case "testing-developer":
        return <TestingDeveloper />;
      case "webcontent-developer":
        return <WebcontentDeveloper />;
      default:
        return " ";
    }
  };
  return (
    <AppWrapper>
      <div>{renderRequired()}</div>
    </AppWrapper>
  );
};

export default ServicesWrapper;
