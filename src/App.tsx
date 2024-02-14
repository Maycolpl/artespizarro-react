import "@/css/App.css";
import "@/css/font.css";
import { Header } from "./components/Header";
import { Portada } from "./components/Portada/Portada";
import { Entidades } from "./components/Portada/Entidades";
import ProductosApp from "./components/Productos/ProductosApp";
function App() {
  return (
    <>
      <Header />
      <Portada />
      <Entidades />
      <ProductosApp />
    </>
  );
}

export default App;
