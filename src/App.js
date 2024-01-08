import React from "react";
import { Content,Footer,Header } from "./func-components";
import './style.css'
import Calendar from "./class-props";

export function App(){
  return (
    <>
    <Header/>
    <p><center><Calendar/></center></p>
    <Content/>
    <Footer/>
    </>
  )
}