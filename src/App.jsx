import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/rout";
function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </React.StrictMode>
  );
}
export default App;
