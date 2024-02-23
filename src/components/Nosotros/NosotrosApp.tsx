import Clientes from "./Clientes/Clientes";
import { NosotrosHeader } from "./NosotrosHeader";
import ValoresAndVideo from "./NosotrosHeader/ValoresAndVideo/ValoresAndVideo";
import NosotrosExperiencia from "./NosotrosHistoria/NosotrosExperiencia";
import NosotrosHistoria from "./NosotrosHistoria/NosotrosHistoria";
import VisionMisionApp from "./VisionMision/VisionMisionApp";

const NosotrosApp = () => {
  return (
    <main className="bg-nosotros w-full min-h-screen m-auto">
      <NosotrosHeader />
      <ValoresAndVideo />
      <NosotrosHistoria />
      <NosotrosExperiencia />
      <VisionMisionApp />
      <Clientes/>
    </main>
  );
};

export default NosotrosApp;
