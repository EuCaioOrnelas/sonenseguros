"use client";

// CSS IMPORT
import "./style/page.css";
import "../../app/globals.css";

import modules from "../types/modules";
import Slider from "../components/Slider/Slider";
import NavbarTraining from "../components/NavbarTraining/NavbarTraining";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";

export default function Page() {
  const [dashboardVisible, setDashboardVisible] = useState(true);
  useEffect(() => {
    if (localStorage.getItem("login") != "validado") {
      setDashboardVisible(false);
      redirect("/login");
    }
    if (localStorage.getItem("login") == "validado") {
      setDashboardVisible(true);
    }
  });
  return (
    <>
      {dashboardVisible && (
        <div className="background">
          <div className="cover">
            <NavbarTraining />
          </div>
          <div className="sectionModules">
            <div className="title">
              <p>Modulos Gerais</p>
            </div>
            <Slider pagination={true} items={modules}></Slider>
          </div>
        </div>
      )}
    </>
  );
}
