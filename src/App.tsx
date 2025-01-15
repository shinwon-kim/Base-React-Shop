import "../src/assets/css/tailwind.css"
import "./index.css"
import { BrowserRouter } from "react-router-dom";
import Router from "../src/router/router";
import Nav from "../src/layout/Nav";
import Footer from "../src/layout/Footer";


const App = (): JSX.Element => {

  return (
    <BrowserRouter>
      <input type="checkbox" id="side-menu" className="drawer-toggle" />
      <section className="drawer-content">
        {/* Nav를 렌더링 하세요 */}
        <Nav />
        <section className="main pt-16">
          <Router />
        </section>
        <Footer />
        {/* Footer를 렌더링 하세요 */}
      </section>
    </BrowserRouter>
  );
};

export default App;
