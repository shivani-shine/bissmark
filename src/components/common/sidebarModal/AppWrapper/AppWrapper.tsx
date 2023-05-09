import React from "react";
import Footer from "Components/Footer/Footer";
import Header from "Components/Header/Header";


const AppWrapper = ({ children }:any) => {
  return (
    <div>
    <Header/>
      {children}
     <Footer/>
    </div>
  );
};

export default AppWrapper;
