const email = document.querySelector("#email");
const emailWarning = document.querySelector("#email-warning");
const mobile = document.querySelector("#mobile");
const mobileWarning = document.querySelector("#mobile-warning");
const name = document.querySelector("#name");
const nameWarning = document.querySelector("#name-warning");
const message = document.querySelector("#message");
const messageWarning = document.querySelector("#message-warning");
const formLoading = document.querySelector("#form-loading");
const submitButton = document.querySelector("#submit-button");
const forrrm = document.querySelector("#contact-form");
email.addEventListener("input", (e) => {
  if (validateEmail(e.target.value)) {
    emailWarning.classList.remove("block");
    emailWarning.classList.add("hidden");
  } else {
    emailWarning.classList.remove("hidden");
    emailWarning.classList.add("block");
  }
});
mobile.addEventListener("input", (e) => {
  if (phonenumber(e.target.value)) {
    mobileWarning.classList.remove("block");
    mobileWarning.classList.add("hidden");
  } else {
    mobileWarning.classList.remove("hidden");
    mobileWarning.classList.add("block");
  }
});
name.addEventListener("input", (e) => {
  if (validateName(e.target.value)) {
    nameWarning.classList.remove("block");
    nameWarning.classList.add("hidden");
  } else {
    nameWarning.classList.remove("hidden");
    nameWarning.classList.add("block");
  }
});

message.addEventListener("input", (e) => {
  if (validateMessage(e.target.value)) {
    messageWarning.classList.remove("block");
    messageWarning.classList.add("hidden");
  } else {
    messageWarning.classList.remove("hidden");
    messageWarning.classList.add("block");
  }
});

forrrm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (shouldFormSubmmited()) {
    formLoading.classList.remove("hidden");
    submitButton.disabled = true;
    console.log(name.value);
    const templateParams = {
      name: name.value,
      message: message.value,
      mobile: mobile.value,
      email: email.value,
    };
    emailjs
      .send(
        "default_service",
        "defence_academy",
        templateParams,
        "user_MAF97uLs13EW0yOorTHJ5"
      )
      .then(
        function (response) {
          formLoading.classList.add("hidden");
          submitButton.disabled = false;
          alert("your message has been successfully send");
          clearData();
        },
        function (error) {
          formLoading.classList.add("hidden");
          submitButton.disabled = false;
          alert(
            "Sorry! Your message could not be delivered please try again or after some time"
          );
        }
      );
  } else {
    indiacateErrors();
  }
});
function clearData() {
  name.value = "";
  mobile.value = "";
  email.value = "";
  message.value = "";
}
function phonenumber(inputtxt) {
  var phoneno = /^\d{10}$/;
  if (phoneno.test(inputtxt)) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  var re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(String(email).toLowerCase())) {
    return true;
  }
  return false;
}

function validateName(name) {
  if (name.trim().length > 4) {
    return true;
  } else {
    return false;
  }
}

function validateMessage(message) {
  if (message.trim().length >= 20) {
    return true;
  } else {
    return false;
  }
}

function shouldFormSubmmited() {
  const email = document.querySelector("#email");
  const emailWarning = document.querySelector("#email-warning");
  const mobile = document.querySelector("#mobile");
  const mobileWarning = document.querySelector("#mobile-warning");
  const name = document.querySelector("#name");
  const nameWarning = document.querySelector("#name-warning");
  const message = document.querySelector("#message");
  const messageWarning = document.querySelector("#message-warning");

  if (
    validateName(email.value) &&
    validateMessage(message.value) &&
    validateEmail(email.value) &&
    phonenumber(mobile.value)
  ) {
    return true;
  } else {
    return false;
  }
}

function indiacateErrors() {
  const email = document.querySelector("#email");
  const emailWarning = document.querySelector("#email-warning");
  const mobile = document.querySelector("#mobile");
  const mobileWarning = document.querySelector("#mobile-warning");
  const name = document.querySelector("#name");
  const nameWarning = document.querySelector("#name-warning");
  const message = document.querySelector("#message");
  const messageWarning = document.querySelector("#message-warning");
  if (validateEmail(email.value)) {
    emailWarning.classList.remove("block");
    emailWarning.classList.add("hidden");
  } else {
    emailWarning.classList.remove("hidden");
    emailWarning.classList.add("block");
  }
  if (phonenumber(mobile.value)) {
    mobileWarning.classList.remove("block");
    mobileWarning.classList.add("hidden");
  } else {
    mobileWarning.classList.remove("hidden");
    mobileWarning.classList.add("block");
  }
  if (validateName(name.value)) {
    nameWarning.classList.remove("block");
    nameWarning.classList.add("hidden");
  } else {
    nameWarning.classList.remove("hidden");
    nameWarning.classList.add("block");
  }
  if (validateMessage(message.value)) {
    messageWarning.classList.remove("block");
    messageWarning.classList.add("hidden");
  } else {
    messageWarning.classList.remove("hidden");
    messageWarning.classList.add("block");
  }
}
