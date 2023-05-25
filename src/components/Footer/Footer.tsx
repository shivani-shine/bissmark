import React from "react";
import footerStyles from "Styles/Footer.module.css";
import sidebarStyles from "Styles/Sidebar.module.css";
import footerlogo from "Assets/images/logo.png";
import facebook from "Assets/images/footer-icon/facebook.png";
import linkedin from "Assets/images/footer-icon/linkedin.png";
import youtube from "Assets/images/footer-icon/youtube.png";
import Quoteform from "Common/sidebarModal/SidebarModal";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import styles from 'Styles/Header.module.css';

const Footer = () => {
  const sideBarData = useSelector((state: any) => state.rootReducer);

  return (
    <footer>
      <div>
        <div className={footerStyles.foo_image}>
          <div className="container">
            <div
              className={`panel-group row ${footerStyles.row_wrapper}`}
              id="accordion"
              role="tablist"
              aria-multiselectable="true"
            >
              <div className={` panel panel-default col-sm-3 ${footerStyles.ft_logo_wrapper}`}>
                {/* <Link href="/" className={styles.navbar_brand}>
                  <Image className={styles.img} src={footerlogo} alt="logo" />
                </Link> */}
                <ul>
                  <li>
                    <span>Location:</span>{" "}
                    <span className={footerStyles.opacity_span}>
                    442 5th Avenue #2160 Manhattan, NY 10018 United States
                      <span />
                    </span>
                  </li>
                  <li>
                    <span>Contact Number:</span>{" "}
                    <span className={footerStyles.opacity_span}>+ 19052260281</span>
                  </li>
                  <li>
                    <span>E-mail:</span>{" "}
                    <span className={footerStyles.opacity_span}>info@bissmarks.com</span>
                  </li>
                  <li>
                    <a
                      href="#"
                      target="_blank"
                    >
                      <i className="fa fa-facebook-official"/>
                    </a>
                    <i className="fa fa-facebook-official">
                      <a
                        href="#"
                        target="_blank"
                      >
                        <i className="fa fa-linkedin-square" />
                      </a>
                      <i className="fa fa-linkedin-square">
                        <a
                          href="#"
                          target="_blank"
                        >
                          <i className="fa fa-youtube-play" />
                        </a>
                        <i className="fa fa-youtube-play"></i>
                      </i>
                    </i>
                  </li>
                  <i className="fa fa-facebook-official">
                    <i className="fa fa-linkedin-square">
                      <i className="fa fa-youtube-play"></i>
                    </i>
                  </i>
                </ul>
                <i className="fa fa-facebook-official">
                  <i className="fa fa-linkedin-square">
                    <i className="fa fa-youtube-play"></i>
                  </i>
                </i>
              </div>

              <div className={` "panel panel-default col-sm-3"  ${footerStyles.product_detail}`}>
                <div role="tab" id="headingOne">
                  <h4 className={footerStyles.panel_title}>
                    <a
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      COMPANY
                    </a>
                  </h4>
                </div>
                <div
                  id="collapseOne"
                  className={` panel-collapse collapse in ${footerStyles.product_list} ${footerStyles.product_data}`}
                  role="tabpanel"
                  aria-labelledby="headingOne"
                >
                  <ul>
                    <li>
                      <Link href="/why-us">Why us</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={` "panel panel-default col-sm-3" ${footerStyles.product_detail}`}>
                <div role="tab" id="headingTwo">
                  <h4 className={footerStyles.panel_title}>
                    <a
                      className="collapsed"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      SERVICES
                    </a>
                  </h4>
                </div>
                <div
                  id="collapseTwo"
                  className={` panel-collapse ${footerStyles.product_list} `}
                  role="tabpanel"
                  aria-labelledby="headingTwo"
                >
                  <ul className={footerStyles.list_1}>
                    <li>
                      <a href="/">Trademark Filling</a>
                    </li>
                    <li>
                      <a href="/">
                        Comprehensive Search
                      </a>
                    </li>
                    <li>
                      <a href="/">Statement of use</a>
                    </li>
                    <li>
                      <a href="/">
                        Response to Trademark office action
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={` panel panel-default col-sm-3 ${footerStyles.product_detail}`}>
                <div
                  id="collapseTwo"
                  className={` "panel-collapse  ${footerStyles.product_list}`}
                  role="tabpanel"
                  aria-labelledby="headingTwo"
                >
                  <div className={footerStyles.list_2}>
                    <div className={footerStyles.Follow}>
                      <h4 className={footerStyles.panel_title}>
                        <a className="collapsed">Follow us on</a>
                      </h4>
                      <ul>
                        <li>
                          <Image src={facebook} alt="facebook" style={{ marginRight:'5px'}}/>
                          <Image src={linkedin} alt="linkedin" style={{ marginRight:'5px'}}/>
                          <Image src={youtube} alt="youtube" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={footerStyles.foot_info}>
            <hr />
            <p id="cpy">Copyright 2023 © BISSMARKS</p>
          </div>
        </div>
      </div>
      <div
        className={`${sidebarStyles.sidebar_contact} ${sideBarData.showSideBar ? sidebarStyles.active : null
          }`}
      >
        <Quoteform />
      </div>
    </footer>
  );
};

export default Footer;
