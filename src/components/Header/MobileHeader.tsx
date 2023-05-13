import React , {useState} from 'react'
import mobilelogo from "Assets/images/logo.png";
import { hireDeveloper } from "Common/constants";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'
import styles from 'Styles/Header.module.css'
import SvgLeftArrow from 'Assets/Svg/Svglogo';
import MobileMenuSvg from 'Assets/Svg/MenuSideSvg';
  import CloseMenuSvg from 'Assets/Svg/CloseMenuSvg';


const MobileHeader = () => {
  const router = useRouter();
    const [openSideBar, setOpenSideBar] = useState(false)
    const [menuList , setMenuList] = useState(false)
    const [menuList1 , setMenuList1] = useState(false)
    const [hireDevMenuListOpen , setHireDevMenuListOpen] = useState(false)
    const subNavitemActive = [
      {
        
          id: 1, 
          title: "Trademark Filling", 
          url: "/" 
      },
      {
        
        id: 2, 
        title: "Comprehensive Search", 
        url: "/" 
    },
    {
        
      id: 3, 
      title: "Response to trademark", 
      url: "/" 
    }, 
    {
        
      id: 4, 
      title: "Statement of use", 
      url: "/" 
    }, 
    {
        
      id: 5, 
      title: "Extension to file", 
      url: "/" 
    },
    ]
  return (
    <>
   <div className="mobiledeader">
        <div className="wrapper mobileview">
          <nav>
            <a className="navbar-brand" href="/" >
              <Image src={mobilelogo} alt="logo" />
            </a>
            <label className= "m-menu__toggle"  htmlFor="menu"  onClick={()=>setOpenSideBar(true)} >
              <MobileMenuSvg/>
            </label>
            <label className="m-menu__overlay" htmlFor="menu" />
            <div className={openSideBar  ? "m-menu open "  : "m-menu "} >
              <div className="m-menu__header" >
                <label className= "m-menu__toggle" htmlFor="menu"  onClick={()=>setOpenSideBar(false)}>
                  <CloseMenuSvg/>
                </label>
                <span>MENU</span>
              </div>
              <ul>
                <li>
                  <Link href="/"  onClick={()=>setOpenSideBar(false)}>Home</Link>
                </li>
                {/* <li>
                  <label className="a-label__chevron" htmlFor="item-2"  onClick={()=>setMenuList1(true)}>
                    Services
                  </label>
                  <div className={menuList1 ? "m-menu open"  : "m-menu"  }>
                    <div className="m-menu__header">
                      <label className="m-menu__toggle" htmlFor="item-2" onClick={()=>setMenuList1(false)} >
                    <SvgLeftArrow/>
                      </label>
                      <span>Services</span>
                      </div>
                      <ul>
                      {subNavitemActive.map((item)=>{
                      return(
                        <li key = {item.id}>
                      <Link href={item.url} onClick={()=>setOpenSideBar(false)}>{item.title}</Link>
                    </li>
                      )
                    })}
                    </ul>
                  </div>
                </li> */}
                <li>
                <Link href="/#second-section"  onClick={()=>setOpenSideBar(false)}>Services</Link>
                 
                </li>
                {/* Services Menu */}
                {/* <li>
                  <Link href="/"  onClick={()=>setOpenSideBar(false)}>Free Guides</Link>
                </li> */}
                {/* Hire Developers */}
                <li>
                  <Link href="/why-us"  onClick={()=>setOpenSideBar(false)}>Why us</Link>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
                <li>
                  <a href="/login">Login</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
   
    </>
  )
}

export default MobileHeader