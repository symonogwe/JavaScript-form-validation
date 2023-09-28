const validateFormObj = {
  // Email Element validators
  validateEmail: () => {
    const email = document.getElementById("email");
    email.setCustomValidity("");

    if (email.checkValidity()) {
      validateFormObj.emailEndsWith();
    } else {
      validateFormObj.revealEmailError();
    }
  },
  // Zip Element Validator
  zipCountries: [
    ["Kenya", "^K.*254"],
    ["Uganda", "^U.*256"],
    ["Rwanda", "^R.*250"],
    ["Somalia", "^S.*252"],
    ["Djibouti", "^D.*253"],
  ],
  validateZip() {
    const zip = document.getElementById("zip");
    zip.setCustomValidity("");

    if (zip.checkValidity()) {
      validateFormObj.checkZip();
    } else {
      validateFormObj.revealZipError();
    }
  },
  // Password Element validator
  validatePassword() {
    const password = document.getElementById("password");
    password.setCustomValidity("");

    if (password.checkValidity()) {
      password.setCustomValidity("");
    } else {
      validateFormObj.revealPasswordError();
    }
  },
  validateConfirmPassword() {
    const confirmPassword = document.getElementById("confirm-password");
    confirmPassword.setCustomValidity("");

    if (confirmPassword.checkValidity()) {
      validateFormObj.isMatchingPassword();
    }
  },

  // Country Element validator
  validateCountry: () => {
    const country = document.getElementById("country");
    country.setCustomValidity("");

    if (country.checkValidity()) {
      validateFormObj.isValidCountry();
    }
  },

  // Reveal Element Validator errors
  revealEmailError: () => {
    const email = document.getElementById("email");

    if (email.validity.tooShort) {
      email.setCustomValidity(
        "The email length you entered needs to be greater than 5"
      );
      email.reportValidity();
      return;
    }
    if (email.validity.valueMissing) {
      email.setCustomValidity("email field can not be left blank");
      email.reportValidity();
      return;
    }
    if (email.validity.typeMismatch) {
      email.setCustomValidity("entered email has to be a valid email address");
      email.reportValidity();
    }
  },
  emailEndsWith: () => {
    const email = document.getElementById("email");

    if (!email.value.endsWith(".com")) {
      email.setCustomValidity("email needs to end with .com");
    } else {
      email.setCustomValidity("");
    }
  },
  revealZipError: () => {
    const zip = document.getElementById("zip");

    if (zip.validity.tooShort) {
      zip.setCustomValidity("value is too short!");
      zip.reportValidity();
    }
  },
  checkZip: () => {
    const zip = document.getElementById("zip");
    const country = document.getElementById("country");
    const countryValue = country.value;
    let index;

    validateFormObj.zipCountries.forEach((arr) => {
      if (arr.includes(countryValue))
        index = validateFormObj.zipCountries.indexOf(arr);
    });

    const zipRegex = new RegExp(validateFormObj.zipCountries[index][1]);
    console.log(zipRegex.test(zip.value));
    const match = zipRegex.test(zip.value);

    if (match === false) {
      zip.setCustomValidity(
        `${country.value}'s zip must start with letter of country & include phone code`
      );
      zip.reportValidity();
    } else {
      zip.setCustomValidity("");
    }
  },
  revealPasswordError: () => {
    const password = document.getElementById("password");

    if (password.validity.tooShort) {
      password.setCustomValidity(
        "Your password needs to be longer than 8 characters"
      );
      password.reportValidity();
    }
    if (password.validity.patternMismatch) {
      password.setCustomValidity(
        "Your Password needs to include at least one alphabetic character, at least one digit & at least one special character."
      );
      password.reportValidity();
    }
  },

  isMatchingPassword: () => {
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");

    if (confirmPassword.value !== password.value) {
      confirmPassword.setCustomValidity("Passwords do not match!");
      confirmPassword.reportValidity();
    }
  },

  isValidCountry: () => {
    const country = document.getElementById("country");
    const zip = document.getElementById("zip");
    let index;

    validateFormObj.zipCountries.forEach((arr) => {
      if (arr.includes(country.value))
        index = validateFormObj.zipCountries.indexOf(arr);
    });

    const zipRegex = new RegExp(validateFormObj.zipCountries[index][1]);
    const match = zipRegex.test(zip.value);

    if (match) {
      country.setCustomValidity("");
    } else {
      country.setCustomValidity("Country & zip need to match!");
      country.reportValidity();
    }
  },
};

// Form Button validators
const formBtn = document.querySelector(".form-btn");
formBtn.addEventListener("click", (e) => {
  const form = document.querySelector("form");

  if (!form.checkValidity()) {
    e.preventDefault();
    form.reportValidity();
  } else {
    alert("Nice work! The form met all constraints!");
    e.preventDefault();
  }
});

export default validateFormObj;
