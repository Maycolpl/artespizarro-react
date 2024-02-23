import ClientesCardsApp from "./ClientesCardsApp";
import TitleClientes from "./TitleClientes";

const Clientes = () => {
  return (
    <article className="container pb-[6rem] m-auto">
      <TitleClientes />
      <ClientesCardsApp />
    </article>
  );
};

export default Clientes;
