import "./App.scss";
import Product from "./components/product/Product";
import Countdown from "./components/countdown/Countdown";

function App() {
  return (
    <div>
      <Countdown />
      <Product />
    </div>
  );
}

export default App;