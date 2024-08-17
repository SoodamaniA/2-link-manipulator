import React, { useState,useEffect } from "react";
import Slider from "../components/Slider";
function Home(props) {

  
  return (
    <>
      <div className="container">
      <Slider title = "base_Servo_1"/> 
      <Slider title = "base_Servo_2"/>
      <Slider title = "shoulder_Arm_servo"/>
      <Slider title = "end_effector_Servo"/>
      </div>

    </>
  );
}

export default Home;