declare type VideoItem = {
  module: string;
  id: string;
  title: string;
  link: string;
  image: string;
  video: string;
  descricao: string;
  anexo: string;
};

declare type VideoList = Array<VideoItem>;

const videos: VideoList = [
  {
    module: "book-da-liberty",
    id: "como-fazer-book-da-liberty",
    title: "Como Fazer o Book da Liberty",
    link: "/dashboard/book-da-liberty/como-fazer-book-da-liberty",
    image: "/modulos/book-da-liberty/aula-book-da-liberty.png",
    video: "https://www.youtube.com/embed/LXVR7D8hF6I?si=wmvHYKikuGC48A3q",
    descricao:
      "Nesse video você aprenderá o passo a passo para fazer o Book da Liberty, o book é um relatorio de renovações, que enviamos mensalmente a liberty, com objetivo de termos descontos em nossas cotações de acordo com a nossa produção do mês",
    anexo: "",
  },
  {
    module: "cotando-no-quiver-max",
    id: "como-cotar-residencial-no-quiver-max",
    title: "Como Cotar Residencial no Quiver Max",
    link: "/dashboard/cotando-no-quiver-max/como-cotar-residencial-no-quiver-max",
    image: "/modulos/cotando-no-quiver-max/aula-cotando-seguro-residencial.png",
    video: "https://www.youtube.com/embed/_tmOEjggZEg?si=_f2oyyeafOIm5i4U",
    descricao:
      "Nesse video você aprenderá o passo a passo para cotar um seguro residencial dentro do Quiver Max, nosso sistema interno de calculo.",
    anexo: "",
  },
];

export default videos;
