import BackendDeveloper from "Components/services/BackendDeveloper"
import WebDeveloper from "Components/services/WebDeveloper"
import BlockchainDevelopers from "Components/services/BlockchainDevelopers"
import DevopsDeveloper from "Components/services/DevopsDeveloper";
import WebcontentDeveloper from "Components/services/WebcontentDeveloper";
import FrontendDeveloper from "Components/services/FrontendDeveloper";
import Appdeveloper from "Components/services/Appdeveloper";
import DataEngineerDeveloper from "Components/services/DataEngineerDeveloper";
import TestingDeveloper from "Components/services/TestingDeveloper";

import { GetServerSidePropsContext, NextPage } from "next";

const IndexPage: NextPage<any> = ({ service }): any => {
  if (service) {
    switch (service) {
      //services
      case "backend-developer":
        return <BackendDeveloper />;
      case "web-developer":
        return <WebDeveloper />;
      case "blockchain-developer":
        return <BlockchainDevelopers />;
      case "devops-developer":
        return <DevopsDeveloper />;
      case "webcontent-developer":
        return <WebcontentDeveloper />
      case "frontend-developer":
        return <FrontendDeveloper />;
      case "app-developer":
        return <Appdeveloper />;
      case "data-engineer-developer":
        return <DataEngineerDeveloper />;
      case "testing-developer":
        return <TestingDeveloper />;
      default:
        return null;
    }
  }
  return "";
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query } = context;
  const title: string = 'Services BISSMARKS';
  const desc: string = 'Services BISSMARKS';
  const keywords: string = 'backend developer, web developer, blockchain developer, devops developer, webcontent developer, frontend developer, app-developer, data-engineer-developer, testing-developer';
  const { service } = query;
  return {
    props: {
      service,
      title,
      desc,
      keywords,
    }, // will be passed to the page component as props

  };
}

export default IndexPage;
