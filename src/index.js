import "./Styles/styles.css";
import validateFormObj from "./validateForm";

window.onload = () => {
  document.getElementById("email").oninput = validateFormObj.validateEmail;
  document.getElementById("email").onchange = validateFormObj.validateEmail;

  document.getElementById("zip").oninput = validateFormObj.validateZip;
  document.getElementById("zip").onchange = validateFormObj.validateZip;
  document.getElementById("zip").onfocus = validateFormObj.validateZip;

  document.getElementById("password").oninput =
    validateFormObj.validatePassword;
  document.getElementById("password").onchange =
    validateFormObj.validatePassword;

  document.getElementById("confirm-password").oninput =
    validateFormObj.validateConfirmPassword;
  document.getElementById("confirm-password").onchange =
    validateFormObj.validateConfirmPassword;

  document.getElementById("country").onchange = validateFormObj.validateCountry;
  document.getElementById("country").onfocus = validateFormObj.validateCountry;
};
