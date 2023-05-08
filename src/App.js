import "./App.scss";
import Product from "./components/product/Product";
import Countdown from "./components/countdown/Countdown";
import { useState } from "react";

function App() {
  const [showCountdown, setShowCountdown] = useState(true)
  return (
    <div>
      {showCountdown && <Countdown onHideCountdown={() => setShowCountdown(false)}/>}
      <Product />
    </div>
  );
}

export default App;