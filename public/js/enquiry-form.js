const enquiryForm = document.querySelector(".enquiry-form");
const name = document.querySelector("#name");
const nameWarning = document.querySelector("#name-warning");
const courseSelected = document.querySelector("#courseselected");
const mobile = document.querySelector("#mobile");
const mobileWarning = document.querySelector("#mobile-warning");
const submitButton = document.querySelector("#submit-button");
const message = document.querySelector("#message");
const success = document.querySelector("#enquiry-success");
const failed = document.querySelector("#enquiry-failed");
const loading = document.querySelector("#loading-enquiry");
enquiryForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (shouldFormSubmmited()) {
    loading.classList.remove("hidden");
    submitButton.disabled = true;
    emailjs
      .sendForm(
        "default_service",
        "defence_academy",
        enquiryForm,
        "user_MAF97uLs13EW0yOorTHJ5"
      )
      .then((data) => {
        console.log(data);
        failed.classList.add("hidden");
        success.classList.remove("hidden");
        loading.classList.add("hidden");
        name.value = "";
        courseSelected.value = "NDA/NA";
        mobile.value = "";
        message.value = "";
        submitButton.disabled = false;
      })
      .catch((err) => {
        console.log(err);
        success.classList.add("hidden");
        failed.classList.remove("hidden");
        loading.classList.add("hidden");
        submitButton.disabled = false;
      });
  } else {
    indiacateErrors();
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

function shouldFormSubmmited() {
  if (validateName(name.value) && phonenumber(mobile.value)) {
    return true;
  } else {
    return false;
  }
}

function indiacateErrors() {
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
}
