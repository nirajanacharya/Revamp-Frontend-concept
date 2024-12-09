import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/main.css";
import { Flowbite } from "flowbite-react";
import "flowbite";
import Routing from "./config/routing.component";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Flowbite theme={{ mode: "auto" }}>
     <Routing/>
    </Flowbite>
  </StrictMode>
);
