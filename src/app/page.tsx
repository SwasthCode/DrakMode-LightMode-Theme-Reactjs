import Content from "@/components/Content";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Login from "@/components/login/Login";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  // const [theme, setTheme] = useState('')
  return (
    
    <>
     <Content />
     <Login/>

    </>
   
  );
}
