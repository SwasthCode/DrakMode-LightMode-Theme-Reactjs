"use client";
import React, { useContext, useState } from "react";
import "./Header.css";
import Link from "next/link";
import Image from "next/image";
import Moon from "../../public/Moon.png";
import Sun from "../../public/Sun.png";

const Header = () => {
  const [dark, setDark] = useState(false);
  // const [darkState , setDarkState] = useContext(dark)//global

  const handleTheme =()=>{
    console.log(dark)
    setDark(!dark)

    // setDarkState(dark)

  }
  return (
    <div className= {dark? "Headerdark" : "Header"}>
      <div className={dark ? "logodark" : "logo"}>SeekSolution</div>

      <div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/service">Service</Link>
          </li>
          <li>
            <Link href="/vlog">Vlog</Link>
          </li>
        </ul>
      </div>
      <div onClick={handleTheme} style={{ }}>
        <Image src={dark? Moon: Sun} alt="" height={25} width={25} />
      </div>
      <div>
        <button className={dark? "btndark":"btn"}>Sign</button>
      </div>
    </div>
  );
};

export default Header
