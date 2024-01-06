import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./style.css";

import Navigo from "navigo"; // When using ES modules.

const router = new Navigo("/");
function home() {
  document.querySelector("#main-app").innerHTML = "Home";
}

router
  .on("/", () => {
    home();
  })
  .on("/home", () => {
    home();
  })
  .on("/about", () => {
    document.querySelector("#main-app").innerHTML = "about";
  })
  .on("/contact", () => {
    document.querySelector("#main-app").innerHTML = "contact";
  })
  .resolve();
