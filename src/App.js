import logo from "./logo.svg";
import "./App.css";
import { HeroComponent } from "./agh-homepage/hero-page/hero-page";
import { InfoComponent } from "./agh-homepage/info";
import { OurServicesComponent, OutServices } from "./agh-homepage/our-services";
import DummyComponent from "./agh-homepage/dummy/dummy";

function App() {
  return (
    <div className="App">
      <HeroComponent />
      <InfoComponent />
      <OurServicesComponent />
      {/* <DummyComponent /> */}
    </div>
  );
}

export default App;
