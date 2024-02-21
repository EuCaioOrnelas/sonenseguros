import NavbarTraining from "@/app/components/NavbarTraining/NavbarTraining";
import videos from "../../../types/videos";
import "./style/page.css";
import "../../../globals.css";
import modules from "@/app/types/modules";

// ICONS
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

declare type PageData = {
  params: {
    moduleItem: string;
    id: string;
  };
};

export default function Page({ params }: PageData) {
  const videosInModule = videos.filter((video) => {
    return video.module == params.moduleItem;
  });

  const moduleItem = modules.find((module) => {
    return module.id == params.moduleItem;
  });

  const video = videosInModule.find((video) => {
    return video.id == params.id;
  });

  if (video == undefined) {
    return <h1>Não encontrado</h1>;
  }

  // transfer from one class to another
  const index = videosInModule.indexOf(video);
  const next = videosInModule[index + 1];
  const previous = videosInModule[index - 1];

  return (
    <>
      <div className="background">
        <NavbarTraining />
        <div className="sectionVideo">
          <div className="videoContent">
            <div className="title">
              <h1>
                {moduleItem?.title} - {video.title}
              </h1>
            </div>
            <div className="video">
              <iframe
                src={video.video}
                title="YouTube video player"
                allow="accelerometer; autoplay; controls; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            <div className="transferClassRoom">
              {previous && (
                <div className="previousClassRoom">
                  <a href={"/dashboard/" + previous.module + "/" + previous.id}>
                    <FaArrowLeft /> video anterior
                  </a>
                </div>
              )}
              {next && (
                <div className="nextClassRoom">
                  <a href={"/dashboard/" + next.module + "/" + next.id}>
                    proximo video
                    <FaArrowRight />
                  </a>
                </div>
              )}
            </div>
            <div className="descript">
              <h3>Descrição:</h3>
              <p>{video.descricao}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
