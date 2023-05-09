import React from "react";
import { FrontEnd } from "../icons/Icons";
import OurServiceStyle from 'Styles/Home/OurService.module.css'
import Image from "next/image";
import Link from "next/link";

const ServicesCard = ({ id, title, imgSrc, body, url }:any) => {
  return (
    <div className={`col-xs-12 col-sm-6 col-md-4 ${OurServiceStyle.w_c_section} `}key={id}>
      <div className={OurServiceStyle.Web_Development_heading}>
        <div className={OurServiceStyle.card_border}>
          <span className={OurServiceStyle.top} />
          <span className={OurServiceStyle.right} />
          <span className={OurServiceStyle.bottom}/>
          <span className={OurServiceStyle.left} />
        </div>
        <div className={OurServiceStyle.content}>
          <div className={OurServiceStyle.Web_Development}>
            <div className={OurServiceStyle.card_hh}>
              <Image src={imgSrc} alt='our services' className={OurServiceStyle.cards_image}/>
             
              <h3>{title}</h3>
            </div>
          </div>
          <div className={OurServiceStyle.Our_developers_build_not}>
            <p>{body}</p>
            {/* <Link href={`service/${url}`} className={OurServiceStyle.readMore}>
              Read more 
              <FrontEnd />
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
