const textArea = document.querySelector("#text-area");
const data = courseData[document.title.toLowerCase()];
console.log(data);
const courseButtonList = document.querySelectorAll(".course-button");

courseButtonList.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.dataset.active === "false") {
      courseButtonList.forEach((element) => {
        element.dataset.active = "false";
        element.classList.remove("course-button-active");
        element.classList.add("course-button-inactive");
      });
      element.classList.remove("course-button-inactive");
      element.classList.add("course-button-active");
      element.dataset.active = "true";
      textArea.innerHTML = data[element.dataset.value];
      console.log(element.dataset.value);
    }
  });
});
