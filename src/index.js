import "./styles.css";
import { setupEventListeners } from "./eventHandler";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

document.addEventListener("DOMContentLoaded", () => {
  setupEventListeners();
});
