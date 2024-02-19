import { Link } from "react-router-dom";

const enlaces = [
  {
    path: "",
    text: "Enlaces De Ayuda",
  },
  {
    path: "",
    text: "Politicas De Privacidad",
  },
  {
    path: "",
    text: "Términos y condiciones",
  },
  {
    path: "",
    text: "Libros de Reclamaciones",
  },
];

const FooterEnlaces = () => {
  return (
    <div className="flex-[0_1_9.625rem] max-md:flex-[0_1_100%]">
      <div className="flex justify-center text-[0.9rem] gap-3 gilroy-semi-bold flex-col flex-[0_1_9.625rem]">
        {enlaces.map((links, index) => (
          <Link  key={index} to={links.path}>
            {links.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterEnlaces;
