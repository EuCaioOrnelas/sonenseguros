declare type ModuleItem = {
  id: string;
  title: string;
  link: string;
  image: string;
};

declare type ModuleList = Array<ModuleItem>;

const modules: ModuleList = [
  {
    id: "baixar-renovacoes",
    title: "Baixar Renovações",
    link: "/dashboard/baixar-renovacoes",
    image: "/modulos/baixar-renovacoes/baixar-renovacoes.png",
  },
  {
    id: "book-da-liberty",
    title: "Book da Liberty",
    link: "/dashboard/book-da-liberty",
    image: "/modulos/book-da-liberty/book-da-liberty.png",
  },
  {
    id: "como-passar-renovacoes",
    title: "Como Passar Renovações",
    link: "",
    image: "/modulos/como-passar-renovacoes/como-passar-renovacoes.png",
  },
  {
    id: "extrato-de-comissoes",
    title: "Extrato de Comissões",
    link: "",
    image: "/modulos/extrato-de-comissoes/extrato-de-comissoes.png",
  },
  {
    id: "cotar-frotas",
    title: "Cotar Frotas",
    link: "",
    image: "/modulos/cotar-frotas/cotar-frotas.png",
  },
  {
    id: "cotando-no-quiver-max",
    title: "Cotando no Quiver Max",
    link: "/dashboard/cotando-no-quiver-max",
    image: "/modulos/cotando-no-quiver-max/cotando-no-quiver-max.png",
  },
];

export default modules;
