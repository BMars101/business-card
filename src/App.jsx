import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Info from "./components/Info";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="main-container">
        <Info />
      </div>
    </>
  );
}

export default App;
