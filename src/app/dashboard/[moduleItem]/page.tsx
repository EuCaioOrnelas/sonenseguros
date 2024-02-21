"use client";

import Slider from "@/app/components/Slider/Slider";
import videos from "../../types/videos";
import modules from "@/app/types/modules";
import "./style/page.css";
import "../../globals.css";
import NavbarTraining from "@/app/components/NavbarTraining/NavbarTraining";
import { useState } from "react";

declare type PageData = {
  params: {
    moduleItem: string;
  };
};

export default function Page({ params }: PageData) {
  const moduleItem = modules.find((module) => {
    return module.id == params.moduleItem;
  });

  const [videosFound, setvideosFound] = useState(false);

  if (moduleItem == undefined) {
    return (
      <>
        <div className="background">
          <div className="cover">
            <NavbarTraining />
            <div className="title">
              <h1>Modulo nao existe</h1>
            </div>
          </div>
          <div className="found"></div>
        </div>
      </>
    );
  }

  const videoList = videos.filter((video) => {
    return video.module == moduleItem.id;
  });

  const total = videoList.length;

  return (
    <>
      <div className="background">
        <div className="cover">
          <NavbarTraining />
          <div className="title">
            <h1>{moduleItem.title}</h1>
            {total == 0 && <p>Nenhum video encontrado nessa categoria</p>}
            {total >= 1 && (
              <p>
                {total} {total == 1 ? "video encontrado" : "videos encontrados"}
              </p>
            )}
          </div>
        </div>
        {total > 0 && (
          <div className="sliderSection">
            <Slider pagination={true} items={videoList}></Slider>
          </div>
        )}

        {total == 0 && <div className="found"></div>}
      </div>
    </>
  );
}
