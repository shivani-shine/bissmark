import UIDesigner from "Components/hireDevelopers/HireUiDesigner";
import AndroidAppDeveloper from "Components/hireDevelopers/AndroidAppDeveloper";
import SwiftDeveloper from "Components/hireDevelopers/HireSwiftDeveloper";
import AngularJsDeveloper from "Components/hireDevelopers/AngularJsDeveloper";
import PHPDeveloper from "Components/hireDevelopers/PHPDeveloper";
import SpringBootDevelopers from "Components/hireDevelopers/SpringBootDevelopers";
import HireWebDevelopers from "Components/hireDevelopers/HireWebDeveloper";
import HireLotSolution from "Components/hireDevelopers/HireLotSolution";
import IOSDeveloper from "Components/hireDevelopers/IOSDeveloper";
import IonicDeveloper from "Components/hireDevelopers/IonicDeveloper";
import ReactJsDeveloper from "Components/hireDevelopers/ReactJsDeveloper";
import PythonDeveloper from "Components/hireDevelopers/PythonDeveloper";
import DjangoDevelopers from "Components/hireDevelopers/DjangoDevelopers";
import HireSoftwareDeveloper from "Components/hireDevelopers/HireSoftwareDeveloper";
import HireDataScientist from "Components/hireDevelopers/HireDataScientist";
import FlutterDeveloper from "Components/hireDevelopers/FlutterDeveloper";
import HireKotlinDevelopers from "Components/hireDevelopers/HireKotlinDevelopers";
import HireNodejsDeveloper from "Components/hireDevelopers/HireNodejsDeveloper";
import GolangDeveloper from "Components/hireDevelopers/GolangDeveloper";
import WordPressDeveloper from "Components/hireDevelopers/WordpressDeveloper";
import HireFullStackDeveloper from "Components/hireDevelopers/HireFullStackDeveloper";
import BlockChainDeveloper from "Components/hireDevelopers/BlockChainDeveloper";
import ReactNativeDeveloper from "Components/hireDevelopers/ReactNativeDeveloper";
import JavaDeveloper from "Components/hireDevelopers/JavaDeveloper";
import VueJsDeveloper from "Components/hireDevelopers/VueJsDeveloper";
import SolidityDeveloper from "Components/hireDevelopers/SolidityDeveloper";
import HireDevelopers from "Components/hireDevelopers/HireDevelopers";


import { GetServerSidePropsContext, NextPage } from "next";

const IndexPage: NextPage<any> = ({ hire }): any => {

    if (hire) {
        switch (hire) {
            case "app-developer":
                return <HireDevelopers />;
            case "ux-ui-designer":
                return <UIDesigner />;
            case "android-developer":
                return <AndroidAppDeveloper />;
            case "swift-developer":
                return <SwiftDeveloper />;
            case "angularJS-developer":
                return <AngularJsDeveloper />;
            case "php-developer":
                return <PHPDeveloper />;
            case "springboot-developer":
                return <SpringBootDevelopers />;
            case "web-developer":
                return <HireWebDevelopers />;
            case "Iot-solution":
                return <HireLotSolution />;
            case "ios-developer":
                return <IOSDeveloper />;
            case "ionic-developer":
                return <IonicDeveloper />;
            case "react-JS-developer":
                return <ReactJsDeveloper />;
            case "python-developer":
                return <PythonDeveloper />;
            case "django-developer":
                return <DjangoDevelopers />;
            case "software-developer":
                return <HireSoftwareDeveloper />;
            case "data-scientist":
                return <HireDataScientist />;
            case "flutter-developer":
                return <FlutterDeveloper />;
            case "kotlin-developer":
                return <HireKotlinDevelopers />;
            case "nodejs-developer":
                return <HireNodejsDeveloper />;
            case "golang-developer":
                return <GolangDeveloper />;
            case "wordpress-developer":
                return <WordPressDeveloper />;
            case "full-stack-developer":
                return <HireFullStackDeveloper />;
            case "blockchain-developer":
                return <BlockChainDeveloper />;
            case "react-native-developer":
                return <ReactNativeDeveloper />;
            case "Java-developer":
                return <JavaDeveloper />;
            case "vuejs-developer":
                return <VueJsDeveloper />;
            case "solidity-developer":
                return <SolidityDeveloper />;
            default:
                return null;
        }
    }
    return "";
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { query } = context;
    const title: string = 'Hire developers BISSMARKS';
    const desc: string = 'Hire developers BISSMARKS';
    const keywords: string = 'hire developers, backend developer, angularjs developer, blockchain developer,  wordpress developer, fullstack developer, testing developer, ios developer, android app developer';
    const { hire } = query;
    return {
        props: {
            hire,
            title,
            desc,
            keywords,
        }
    };
}

export default IndexPage;
