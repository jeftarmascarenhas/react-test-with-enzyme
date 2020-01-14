import React from "react";

import Temperature from "./components/temperature";

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
    </div>
  );
}

export default App;
