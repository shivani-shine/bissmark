
import { ReactNode } from "react";

export default interface ILayout{
    children: ReactNode,
    title:string,
    desc:string,
    keywords:string
}