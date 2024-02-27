// Loader Animation JS

document.addEventListener("DOMContentLoaded", () => {
  let loaderNum = 0;
  const loaderNumElement = document.querySelector("#loader-num h1");
  const mainPage = document.querySelector(".main-page");

  function updateLoader() {
    loaderNum++;
    loaderNumElement.textContent = `${loaderNum}%`;
    if (loaderNum < 100) {
      setTimeout(updateLoader, 10);
    } else {
      setTimeout(() => {
        document.getElementById("loader").classList.add("animate");
        mainPage.style.display = "block";
      }, 100);
    }
  }

  updateLoader();
});

// Cursor

var crsr = document.querySelector(".cursor");
var main = document.querySelector(".main");
document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + 5 + "px";
  crsr.style.top = dets.y + 5 + "px";
});

// Skills Bar Animation

let animating = false;

function toggleAnim() {
  const C = document.querySelector(".C");

  if (!animating) {
    const keyframes = `
      @keyframes C {
        0% {
          width: 0%;
        }
        100% {
          width: 85%;
        }
      }
    `;
    const styleElement = document.createElement("style");
    styleElement.id = "CKeyframes";
    styleElement.innerHTML = keyframes;
    document.head.appendChild(styleElement);

    C.style.animation = "C 3s";
    animating = true;
  } else {
    const styleElement = document.getElementById("CKeyframes");
    if (styleElement) {
      styleElement.remove();
    }
    C.style.animation = "";
    animating = false;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const C = document.querySelector(".C");
  C.addEventListener("click", toggleAnim);
});

function toggleAnimCpp() {
  const Cpp = document.querySelector(".Cpp");

  if (!animating) {
    const keyframes = `
      @keyframes Cpp {
        0% {
          width: 0%;
        }
        100% {
          width: 90%;
        }
      }
    `;
    const styleElement = document.createElement("style");
    styleElement.id = "CppKeyframes";
    styleElement.innerHTML = keyframes;
    document.head.appendChild(styleElement);

    Cpp.style.animation = "Cpp 3s";
    animating = true;
  } else {
    const styleElement = document.getElementById("CppKeyframes");
    if (styleElement) {
      styleElement.remove();
    }
    Cpp.style.animation = "";
    animating = false;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const Cpp = document.querySelector(".Cpp");
  Cpp.addEventListener("click", toggleAnimCpp);
});

function toggleAnimJava() {
  const Java = document.querySelector(".Java");

  if (!animating) {
    const keyframes = `
      @keyframes Java {
        0% {
          width: 0%;
        }
        100% {
          width: 75%;
        }
      }
    `;
    const styleElement = document.createElement("style");
    styleElement.id = "JavaKeyframes";
    styleElement.innerHTML = keyframes;
    document.head.appendChild(styleElement);

    Java.style.animation = "Java 3s";
    animating = true;
  } else {
    const styleElement = document.getElementById("JavaKeyframes");
    if (styleElement) {
      styleElement.remove();
    }
    Java.style.animation = "";
    animating = false;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const Java = document.querySelector(".Java");
  Java.addEventListener("click", toggleAnimJava);
});

function toggleAnimPython() {
  const Python = document.querySelector(".Python");

  if (!animating) {
    const keyframes = `
      @keyframes Python {
        0% {
          width: 0%;
        }
        100% {
          width: 70%;
        }
      }
    `;
    const styleElement = document.createElement("style");
    styleElement.id = "PythonKeyframes";
    styleElement.innerHTML = keyframes;
    document.head.appendChild(styleElement);

    Python.style.animation = "Python 3s";
    animating = true;
  } else {
    const styleElement = document.getElementById("PythonKeyframes");
    if (styleElement) {
      styleElement.remove();
    }
    Python.style.animation = "";
    animating = false;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const Python = document.querySelector(".Python");
  Python.addEventListener("click", toggleAnimPython);
});

function toggleAnimR() {
  const R = document.querySelector(".R");

  if (!animating) {
    const keyframes = `
      @keyframes R {
        0% {
          width: 0%;
        }
        100% {
          width: 80%;
        }
      }
    `;
    const styleElement = document.createElement("style");
    styleElement.id = "RKeyframes";
    styleElement.innerHTML = keyframes;
    document.head.appendChild(styleElement);

    R.style.animation = "R 3s";
    animating = true;
  } else {
    const styleElement = document.getElementById("RKeyframes");
    if (styleElement) {
      styleElement.remove();
    }
    R.style.animation = "";
    animating = false;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const R = document.querySelector(".R");
  R.addEventListener("click", toggleAnimR);
});

function toggleAnimHTML() {
  const HTML = document.querySelector(".HTML");

  if (!animating) {
    const keyframes = `
      @keyframes HTML {
        0% {
          width: 0%;
        }
        100% {
          width: 90%;
        }
      }
    `;
    const styleElement = document.createElement("style");
    styleElement.id = "HTMLKeyframes";
    styleElement.innerHTML = keyframes;
    document.head.appendChild(styleElement);

    HTML.style.animation = "HTML 3s";
    animating = true;
  } else {
    const styleElement = document.getElementById("HTMLKeyframes");
    if (styleElement) {
      styleElement.remove();
    }
    HTML.style.animation = "";
    animating = false;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const HTML = document.querySelector(".HTML");
  HTML.addEventListener("click", toggleAnimHTML);
});

function toggleAnimCSS() {
  const CSS = document.querySelector(".CSS");

  if (!animating) {
    const keyframes = `
      @keyframes CSS {
        0% {
          width: 0%;
        }
        100% {
          width: 85%;
        }
      }
    `;
    const styleElement = document.createElement("style");
    styleElement.id = "CSSKeyframes";
    styleElement.innerHTML = keyframes;
    document.head.appendChild(styleElement);

    CSS.style.animation = "CSS 3s";
    animating = true;
  } else {
    const styleElement = document.getElementById("CSSKeyframes");
    if (styleElement) {
      styleElement.remove();
    }
    CSS.style.animation = "";
    animating = false;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const CSS = document.querySelector(".CSS");
  CSS.addEventListener("click", toggleAnimCSS);
});

function toggleAnimJS() {
  const JS = document.querySelector(".JS");

  if (!animating) {
    const keyframes = `
      @keyframes JS {
        0% {
          width: 0%;
        }
        100% {
          width: 75%;
        }
      }
    `;
    const styleElement = document.createElement("style");
    styleElement.id = "JSKeyframes";
    styleElement.innerHTML = keyframes;
    document.head.appendChild(styleElement);

    JS.style.animation = "JS 3s";
    animating = true;
  } else {
    const styleElement = document.getElementById("JSKeyframes");
    if (styleElement) {
      styleElement.remove();
    }
    JS.style.animation = "";
    animating = false;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const JS = document.querySelector(".JS");
  JS.addEventListener("click", toggleAnimJS);
});

function toggleAnimMERN() {
  const MERN = document.querySelector(".MERN");

  if (!animating) {
    const keyframes = `
      @keyframes MERN {
        0% {
          width: 0%;
        }
        100% {
          width: 55%;
        }
      }
    `;
    const styleElement = document.createElement("style");
    styleElement.id = "MERNKeyframes";
    styleElement.innerHTML = keyframes;
    document.head.appendChild(styleElement);

    MERN.style.animation = "MERN 3s";
    animating = true;
  } else {
    const styleElement = document.getElementById("MERNKeyframes");
    if (styleElement) {
      styleElement.remove();
    }
    MERN.style.animation = "";
    animating = false;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const MERN = document.querySelector(".MERN");
  MERN.addEventListener("click", toggleAnimMERN);
});

function toggleAnimML() {
  const ML = document.querySelector(".ML");

  if (!animating) {
    const keyframes = `
      @keyframes ML {
        0% {
          width: 0%;
        }
        100% {
          width: 45%;
        }
      }
    `;
    const styleElement = document.createElement("style");
    styleElement.id = "MLKeyframes";
    styleElement.innerHTML = keyframes;
    document.head.appendChild(styleElement);

    ML.style.animation = "ML 3s";
    animating = true;
  } else {
    const styleElement = document.getElementById("MLKeyframes");
    if (styleElement) {
      styleElement.remove();
    }
    ML.style.animation = "";
    animating = false;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const ML = document.querySelector(".ML");
  ML.addEventListener("click", toggleAnimML);
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Typewriter Effect

const texts = ["Frontend Development", "UI/UX Design", "Machine Learning"];
let index = 0;
let subIndex = 0;
let isDeleting = false;
let typedContent = document.getElementById("typedcontent");

function typeWriter() {
  let currentText = texts[index];

  if (!isDeleting && subIndex <= currentText.length) {
    typedContent.innerHTML = currentText.slice(0, subIndex);
    subIndex++;
    setTimeout(typeWriter, 75); // Typing speed
  } else if (isDeleting && subIndex >= 0) {
    typedContent.innerHTML = currentText.slice(0, subIndex);
    subIndex--;
    setTimeout(typeWriter, 75); // Deleting speed
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      index = (index + 1) % texts.length;
      subIndex = 0;
    }
    setTimeout(typeWriter, 200); // time interval between texts
  }
}

setTimeout(typeWriter, 200); // Start typing after 0.5 second

// Scratch Card

let canvas = document.getElementById("scratch-card1");
let context = canvas.getContext("2d");

const init = () => {
  context.fillStyle = "blueviolet";
  context.fillRect(0, 0, 300, 100);
};

let isDragging = false;

const scratch = (x, y) => {
  context.globalCompositeOperation = "destination-out";
  context.beginPath();
  context.arc(x, y, 50, 0, 2 * Math.PI);
  context.fill();
};
canvas.addEventListener("mousedown", (e) => {
  isDragging = true;
  scratch(e.offsetX, e.offsetY);
});

canvas.addEventListener("mousemove", (e) => {
  if (isDragging) {
    scratch(e.offsetX, e.offsetY);
  }
});

canvas.addEventListener("mouseup", () => {
  isDragging = false;
});

canvas.addEventListener("mouseleave", () => {
  isDragging = false;
});

init();

// Go to Top button

window.onscroll = function () {
  scrollFunction();
  scrollFunctionChat();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("goToTopBtn").style.display = "block";
  } else {
    document.getElementById("goToTopBtn").style.display = "none";
  }
}

function goToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Theme Changer

const body = document.querySelector("body");
const h1 = document.querySelectorAll("h1");
const h3 = document.querySelectorAll("h3");
const para = document.querySelectorAll("p");
const lang = document.querySelectorAll(".vertical-title");
const anchor = document.querySelectorAll("a");
const n = document.querySelector("#names");
const headerContentH1Span = document.querySelectorAll(
  "header .content h1 span"
);
const ph = document.querySelector(".phone");
const navicon = document.querySelector(".nav-icon")

let i = 0;

function ThemeChanger() {
  if (i === 0) {
    document.getElementById("themeIcon").innerHTML =
      '<i class="fa-solid fa-sun"></i>';
    document.getElementById("themeIcon").style.color = "#d8860b";
    body.style.transition = "background-color 0.3s ease";
    body.style.backgroundColor = "White";
    navicon.style.color = "#000";
    anchor.forEach((navelement) => {
      navelement.style.transition = "color 0.3s ease";
      navelement.style.color = "#000000";
    });
    n.style.transition = "color 0.3s ease";
    n.style.color = "#000000";
    headerContentH1Span.forEach((span) => {
      span.style.transition = "text-stroke-color 0.3s ease";
      span.style.textStroke = "1px black";
      span.style.webkitTextStroke = "1px black";
    });
    h1.forEach((h) => {
      h.style.transition = "color 0.3s ease";
      h.style.color = "#000000";
    });
    h3.forEach((h) => {
      h.style.transition = "color 0.3s ease";
      h.style.color = "#000000";
    });
    para.forEach((h) => {
      h.style.transition = "color 0.3s ease";
      h.style.color = "#000000";
    });
    lang.forEach((h) => {
      h.style.transition = "color 0.3s ease";
      h.style.color = "#000000";
    });

    i = 1;
  } else {
    document.getElementById("themeIcon").innerHTML =
      '<i class="fa-solid fa-moon"></i>';
    document.getElementById("themeIcon").style.color = "#fff";
    body.style.transition = "background-color 0.3s ease";
    body.style.backgroundColor = "#18181b";
    navicon.style.color = "#fff";
    anchor.forEach((navelement) => {
      navelement.style.transition = "color 0.3s ease";
      navelement.style.color = "white";
    });
    n.style.transition = "color 0.3s ease";
    n.style.color = "white";
    headerContentH1Span.forEach((span) => {
      span.style.transition = "text-stroke-color 0.3s ease";
      span.style.textStroke = "1px white";
      span.style.webkitTextStroke = "1px white";
    });
    h1.forEach((h) => {
      h.style.transition = "color 0.3s ease";
      h.style.color = "#ffffff";
    });
    h3.forEach((h) => {
      h.style.transition = "color 0.3s ease";
      h.style.color = "#ffffff";
    });
    para.forEach((h) => {
      h.style.transition = "color 0.3s ease";
      h.style.color = "#ccc";
    });
    lang.forEach((h) => {
      h.style.transition = "color 0.3s ease";
      h.style.color = "#ccc";
    });

    i = 0;
  }
}

// Slider certificates
const slides = document.querySelectorAll(".slide");
var counter = 0;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const slideShow = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

const goPrev = () => {
  if (counter == 0) {
    counter = slides.length - 1;
    slideShow();
  } else {
    counter--;
    slideShow();
  }
};

const goNext = () => {
  if (counter == slides.length - 1) {
    counter = 0;
    slideShow();
  } else {
    counter++;
    slideShow();
  }
};

function toggleNav() {
  var navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("dropdown-active");
}

function scrollFunctionChat() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("chat-open-button").style.display = "block";
  } else {
    document.getElementById("chat-open-button").style.display = "none";
  }
}



const responses = {
  greeting: "Hello! How can I assist you today?",
  about:
    "I can provide information about Aryajeet Jha, the developer of this website. He is a second-year BTech student at VIT Vellore, specializing in IoT within Computer Science and Engineering. Proficient in C/C++, Python, Java, and Frontend Development. Known for dedication to learning and innovative problem-solving.",
  skills:
    "I can tell you about Aryajeet's skills and expertise. His skills lie in C, C++, Java, Python, HTML, CSS, JavaScript, MERN stack, and Machine Learning ",
  projects: "Explore Aryajeet's projects showcased on this website.",
  certification: "Explore Aryajeet's certificates in ML showcased on this website.",
  contact:
    "You can get in touch with Aryajeet via email at aryajeet.jha@gmail.com or through social media links provided on this website.",
  default: "I'm sorry, I didn't understand that. Could you please rephrase?",
};


function generateResponse(input) {
  input = input.toLowerCase().trim();
  if (input.includes("hello")) {
    return responses.greeting;
  } else if (input.includes("about")) {
    return responses.about;
  } else if (input.includes("skills")) {
    return responses.skills;
  } else if (input.includes("certificates")) {
    return responses.certification;
  } else if (input.includes("projects")) {
    return responses.projects;
  } else if (input.includes("contact")) {
    return responses.contact;
  } else {
    return responses.default;
  }
}


function handleUserInput() {
  const userInput = document.getElementById("chat-input").value;
  const chatHistory = document.getElementById("chat-history");
  const userMessage = userInput;
  chatHistory.value += "You: " + userMessage + "\n";

  const botResponse = generateResponse(userInput);
  chatHistory.value += "Bot: " + botResponse + "\n";


  chatHistory.scrollTop = chatHistory.scrollHeight;

  document.getElementById("chat-input").value = "";
}


document.getElementById("chat-input").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    handleUserInput();
  }
});

function toggleChat() {
  var chatContainer = document.getElementById("chat-container");
  chatContainer.style.display =
    chatContainer.style.display === "none" ? "block" : "none";
}
