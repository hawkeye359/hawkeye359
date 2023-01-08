const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const course = document.querySelector("#course");
const coursemenu = document.querySelector("#course-menu");
hamburger.addEventListener("click", () => {
  menu.classList.toggle("menu-close");
  menu.classList.toggle("menu-open");
});
if (window.innerWidth >= 1024) {
  course.addEventListener("mouseenter", () => {
    coursemenu.classList.remove("hidden");
  });
  course.addEventListener("mouseleave", () => {
    coursemenu.classList.add("hidden");
  });
}

course.addEventListener("click", () => {
  coursemenu.classList.toggle("hidden");
});
const soldier = document.querySelector("#image1");
const horizon1 = document.querySelector("#image2");
const horizon2 = document.querySelector("#image3");
const horizon3 = document.querySelector("#image4");
const heading = document.querySelector("#main-heading");
const listOfTestimonials = [
  {
    name: "Aditya Kumar",
    review:
      "I completed my 12th in 2018 and then joined Universal Defence Academy to prepare for my Navy AA written exam. I have always had a keen interest in Indian Navy and wanted to become an officer in it as soon as possible. I always have self studied till 12th but felt the need of a coaching because I knew that a proper coaching has that kind of teachers who knows and understand the paper pattern along with their repetitive questions. Universal Defence Academy was the perfect coaching for me in these criteria. All I maintained were the notes and time schedule which helped me enormously in clearing the written exam. The healthy competitive environment in Universal Defence Academy campus always urged me to practice everyday in my studies in longer hours.",
    imgUrl: "./images/student1.jpeg",
  },
  {
    name: "Sumit Kumar",
    review:
      "Universal Defence Academy helped me to achieve my dream and I am very grateful to them for that. All the support I got from well professional teachers immensely helped me to perform the best of my abilities. Universal Defence Academy also entrusted me by giving a remarkable financial support which I was constantly looking for in numerous defense coaching institutes. All the weekly mock tests with daily doubt removal sessions along with strict teaching plan allowed me not only to complete my Air Force syllabus but also gave me an ample amount of time to revise various topics.",
    imgUrl: "./images/student2.jpeg",
  },
  {
    name: "Pawan Prajapati",
    review:
      "Due to their organized and focused teaching methods, I came to Universal Defence Academy to seek knowledge, guidance and motivation. Universal Defence Academy provided me a wide range of methods to study for long hours and also, I got to learn something new with every subject. But what really amazed me is the amount of hard work they did to conduct top-notch weekly mock tests which immensely helped me to get comfortable for the Air Force Examination. The entire study environment makes it easy for a student to learn to stand out amongst the talented and hard-working students. The Doubt Removal Counters had always helped me when I got lost in a concept.",
    imgUrl: "./images/student3.jpeg",
  },
  {
    name: "Vinay Katiyar",
    review:
      "Thank you everybody. I want to thank the teachers and staff of Universal Defence Academy in helping me achieve this milestone. The course at Universal Defence Academy is very efficient. It is a complete course and includes everything required for joining Defence. They have the best teachers for English, Maths, Physics, and Chemistry. But more than that the physical training that they provide is very crucial to crack PFT and Medical in Air Force.",
    imgUrl: "./images/student4.jpeg",
  },
];
// window.addEventListener("scroll", () => {
//   let value = window.scrollY;
//   horizon1.style.bottom = -(value * 0.4) + "px";
//   horizon2.style.bottom = -(value * 0.6) + "px";
//   horizon3.style.bottom = -(value * 0.8) + "px";
//   heading.style.marginLeft = 70 - value * 1.7 + "px";
// });

const enquiry = document.querySelector("#enquiry");
const enquiryMenu = document.querySelector("#enquiry-menu");
const closeEnquiry = document.querySelector("#close-enquiry");
enquiry.addEventListener("click", (e) => {
  enquiryMenu.classList.remove("hidden");
  enquiry.classList.add("hidden");
});
closeEnquiry.addEventListener("click", () => {
  enquiryMenu.classList.add("hidden");
  enquiry.classList.remove("hidden");
});

const blogLinks = document.querySelectorAll(".blog-link");
const sideBlogOverlays = document.querySelectorAll(".bg-overlay");

blogLinks[0].addEventListener("mouseover", () => {
  sideBlogOverlays[0].style.backgroundPosition = "0 0";
});

blogLinks[0].addEventListener("mouseleave", () => {
  sideBlogOverlays[0].style.backgroundPosition = "100% 0";
});

blogLinks[1].addEventListener("mouseover", () => {
  sideBlogOverlays[1].style.backgroundPosition = "0 0";
});

blogLinks[1].addEventListener("mouseleave", () => {
  sideBlogOverlays[1].style.backgroundPosition = "100% 0";
});

const menuButton = document.querySelector("#menu-button");
const mobileMenu = document.querySelector("#mobilemenu");

// menuButton.addEventListener("click", () => {
//   mobileMenu.classList.toggle("hidden");
// });
const wrapper = (n) => {
  const wrapLimit = listOfTestimonials.length;
  if (n <= wrapLimit - 1 && n >= 0) {
    return n;
  } else if (n > wrapLimit - 1) {
    return n % wrapLimit;
  } else {
    return wrapLimit - ((-1 * (n + 1)) % wrapLimit) - 1;
  }
};
for (let i = -10; i++; i <= 0) {
  console.log(i, wrapper(i));
}
const testimonialsImage = document.querySelector("#testimonials-image");
const testimonialsImageLeft = document.querySelector("#tetimonials-left-image");
const testimonialsImageRight = document.querySelector(
  "#tetimonials-right-image"
);
const testimonialsName = document.querySelector("#testimonials-name");
const testimonialsText = document.querySelector("#testimonials-text");
const rightClick = document.querySelector(".right-click");
const leftClick = document.querySelector(".left-click");
let currentTestimonials = 1;
rightClick.addEventListener("click", () => {
  testimonialsImage.src =
    listOfTestimonials[wrapper(++currentTestimonials)].imgUrl;
  testimonialsName.innerText =
    listOfTestimonials[wrapper(currentTestimonials)].name;
  testimonialsText.innerHTML =
    listOfTestimonials[wrapper(currentTestimonials)].review.slice(0, 150) +
    "..." +
    "<a href='./html/testimonials.html' class='text-blue-500'>Read More</a>";
  testimonialsImageLeft.src =
    listOfTestimonials[wrapper(currentTestimonials - 1)].imgUrl;
  testimonialsImageRight.src =
    listOfTestimonials[wrapper(currentTestimonials + 1)].imgUrl;
});
testimonialsImage.src = listOfTestimonials[1].imgUrl;
testimonialsName.innerText = listOfTestimonials[1].name;
testimonialsText.innerHTML =
  listOfTestimonials[1].review.slice(0, 150) +
  "..." +
  "<a href='./html/testimonials.html' class='text-blue-500'>Read More</a>";
testimonialsImageLeft.src = listOfTestimonials[0].imgUrl;
testimonialsImageRight.src = listOfTestimonials[2].imgUrl;

leftClick.addEventListener("click", () => {
  currentTestimonials--;
  console.log(wrapper(currentTestimonials));
  testimonialsImage.src =
    listOfTestimonials[wrapper(currentTestimonials)].imgUrl;
  testimonialsName.innerText =
    listOfTestimonials[wrapper(currentTestimonials)].name;
  testimonialsText.innerHTML =
    listOfTestimonials[wrapper(currentTestimonials)].review.slice(0, 150) +
    "..." +
    "<a href='./html/testimonials.html' class='text-blue-500'>Read More</a>";
  testimonialsImageLeft.src =
    listOfTestimonials[wrapper(currentTestimonials - 1)].imgUrl;
  testimonialsImageRight.src =
    listOfTestimonials[wrapper(currentTestimonials + 1)].imgUrl;
});
