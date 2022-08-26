import React from "react";
import { API } from "../Backend";
import "../styles.css"

function Home() {
  console.log("the API is:", API)
  return (
    <div className="text-white">
      Home Page dsad sad {API}
    </div>
  )
}

export default Home
