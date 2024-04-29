import "./App.scss";
import { MainRoutes } from "./routes/MainRoutes";
import { Header } from "./components/layout/Header/Header";
import { Page } from "./components/layout/Page/Page";

function App() {
  return (
    <div className="content">
      <Header />
      <Page>
        <MainRoutes />
      </Page>
    </div>
  );
}

export default App;
