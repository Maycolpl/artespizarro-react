import "@/css/App.css";
import "@/css/font.css";
import { AppRouter } from "./components/routing/AppRouter";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Layout>
      <AppRouter />
    </Layout>
  );
}

export default App;
