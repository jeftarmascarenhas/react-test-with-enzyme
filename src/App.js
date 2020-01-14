import React from "react";

import Temperature from "./components/temperature";
import Gallery from "./components/gallery";

function App() {
  return (
    <div>
      <Temperature
        temp={11}
        city="Recife"
        toggleForecast={() => {
          alert("1");
        }}
      />
      <Gallery />
    </div>
  );
}

export default App;
