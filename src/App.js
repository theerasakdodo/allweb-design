import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Routes from "./Components/Route";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";
function App() {
  return (
    <>
      <Header />
      <Routes />
      <ScrollUpButton
        style={{
          border: "5px solid #007bff ",
          stroke: "#0062cc",
          fill: "rgb(0 123 255 / 25%)",
        }}
      />
      <Footer />
    </>
  );
}

export default App;
