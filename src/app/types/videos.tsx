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
      "Para assistir o video em tela cheia, basta clicar no icone do Youtube, no canto inferior esquerdo. Nesse video você aprenderá o passo a passo para fazer o Book da Liberty, o book é um relatorio de renovações, que enviamos mensalmente a liberty, com objetivo de termos descontos em nossas cotações de acordo com a nossa produção do mês",
    anexo: "",
  },
  {
    module: "comece-aqui",
    id: "aula2",
    title: "Boas Vindas 2",
    link: "/dashboard/comece-aqui/aula2",
    image: "/modulos/comece-aqui/sobre-nos-comece-aqui.png",
    video: "https://www.youtube.com/embed/8-3ZOdp_ZDo",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris venenatis velit neque. Suspendisse molestie, magna eget venenatis tincidunt, est nunc rhoncus orci, eget interdum sapien elit id erat.",
    anexo: "",
  },
  {
    module: "comece-aqui",
    id: "aula3",
    title: "Boas Vindas 3",
    link: "/dashboard/comece-aqui/aula3",
    image: "/modulos/comece-aqui/nosso-diferencial-comece-aqui.png",
    video: "https://www.youtube.com/embed/8-3ZOdp_ZDo",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris venenatis velit neque. Suspendisse molestie, magna eget venenatis tincidunt, est nunc rhoncus orci, eget interdum sapien elit id erat.",
    anexo: "",
  },
  {
    module: "comece-aqui",
    id: "aula4",
    title: "Boas Vindas 4",
    link: "/dashboard/comece-aqui/aula4",
    image: "/modulos/comece-aqui/criando-um-email-profissional-comece-aqui.png",
    video: "https://www.youtube.com/embed/8-3ZOdp_ZDo",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris venenatis velit neque. Suspendisse molestie, magna eget venenatis tincidunt, est nunc rhoncus orci, eget interdum sapien elit id erat.",
    anexo: "",
  },
  {
    module: "sonhe-grande-comece-pequeno",
    id: "aula2",
    title: "como usar o notion",
    link: "https://www.youtube.com/embed/8-3ZOdp_ZDo",
    image: "/aula/sonhe-grande-comece-pequeno",
    video: "https://www.youtube.com/embed/8-3ZOdp_ZDo",
    descricao: "loren inpsun",
    anexo: "",
  },
  {
    module: "nosso-sistema-no-notion",
    id: "aula3",
    title: "como usar o canva",
    link: "https://www.youtube.com/embed/8-3ZOdp_ZDo",
    image: "/aulas/nosso-sistema-no-notion",
    video: "https://www.youtube.com/embed/8-3ZOdp_ZDo",
    descricao: "loren inpsun",
    anexo: "",
  },
  {
    module: "vendedor-expert",
    id: "aula4",
    title: "como usar o vs code",
    link: "https://www.youtube.com/embed/8-3ZOdp_ZDo",
    image: "/aulas/vendedor-expert",
    video: "https://www.youtube.com/embed/8-3ZOdp_ZDo",
    descricao: "loren inpsun",
    anexo: "",
  },
];

export default videos;
