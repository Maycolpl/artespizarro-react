import { Link } from "react-router-dom";

const contacto = [
  {
    path: "",
    text: "Contacto",
  },
  {
    path: "mailto:artespizarro@gmail.com",
    text: "artespizarro@gmail.com",
  },
  {
    path: "tel:+51975709730",
    text: "(+51) 979 237 008",
  },
  {
    path: "tel:+51980324242",
    text: "(+51) 980 324 242",
  },
];

const FooterContacto = () => {
  return (
    <div className="flex justify-between text-[0.9rem] gap-3 gilroy-semi-bold flex-col flex-[0_1_9.625rem]">
      {contacto.map((links, index) => (
        <Link key={index} to={links.path}>
          {links.text}
        </Link>
      ))}
    </div>
  );
};

export default FooterContacto;
