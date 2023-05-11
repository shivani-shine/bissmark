
import { ReactNode } from "react";

export interface ILayout{
    children: ReactNode,
    title:string,
    desc:string,
    keywords:string
}

import React from 'react'

const Layout = () => {
  return (
    <div>layout.type</div>
  )
}

export default Layout