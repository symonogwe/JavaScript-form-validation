import "./Styles/styles.css";
import validateFormObj from "./validateForm";

window.onload = () => {
  document.getElementById("email").oninput = validateFormObj.validateEmail;
  document.getElementById("email").onchange = validateFormObj.validateEmail;

  document.getElementById("zip").oninput = validateFormObj.validateZip;
  document.getElementById("zip").onchange = validateFormObj.validateZip;

  document.getElementById("password").oninput =
    validateFormObj.validatePassword;
  document.getElementById("password").onchange =
    validateFormObj.validatePassword;
};
