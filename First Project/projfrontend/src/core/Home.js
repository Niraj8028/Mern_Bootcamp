import React from "react";
import { API } from "../Backend";
import "../styles.css"
import Base from "./Base";
import Card from "./Card";



function Home() {
  console.log("the API is:", API)
  return (
    <Base>
      <div className="row ">
        <div className="col-4">
        <Card/>
        </div>
        <div className="col-4">
        <button className="btn btn-success">Click here</button></div>
        <div className="col-4">
        <button className="btn btn-success">Click here</button></div>
        
      </div>
    </Base>
  )
}

export default Home
