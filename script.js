import {
  annotate,
  annotationGroup,
} from "https://unpkg.com/rough-notation?module";

setTimeout(() => {
  const a1 = annotate(document.getElementById("name"), {
    type: "highlight",
    color: "red",
    iterations: 2,
    animationDuration: 600,
  });
  const a2 = annotate(document.getElementById("job"), {
    type: "underline",
    color: "red",
    multiline: true,
    padding: 1.5,
    iterations: 3,
    animationDuration: 1000,
  });

  const agroup = annotationGroup([a1, a2]);

  agroup.show();
}, 1700);

const a3 = annotate(document.getElementById("about-job-title"), {
  type: "underline",
  color: "red",
  padding: 1,
  multiline: true,
  iterations: 2,
  animationDuration: 600,
});

const a4 = annotate(document.getElementById("js"), {
  type: "highlight",
  color: "red",
  iterations: 2,
  animationDuration: 600,
});

const a5 = annotate(document.getElementById("html"), {
  type: "highlight",
  color: "red",
  iterations: 2,
  animationDuration: 600,
});

const a6 = annotate(document.getElementById("css"), {
  type: "highlight",
  color: "red",
  iterations: 2,
  animationDuration: 600,
});

const a7 = annotate(document.getElementById("full-stack"), {
  type: "underline",
  color: "red",
  padding: -1,
  multiline: true,
  iterations: 2,
  animationDuration: 600,
});

const aboutAGroup = annotationGroup([a3, a4, a5, a6, a7]);

var controller = new ScrollMagic.Controller();

var revealElements = document.getElementsByClassName("logo-box");
for (var i = 0; i < revealElements.length; i++) {
  // create a scene for each element
  new ScrollMagic.Scene({
    triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
    offset: 50, // start a little later
    triggerHook: 0.9,
    reverse: false,
  })
    .setClassToggle(revealElements[i], "visible") // add class toggle
    .addTo(controller);
}

new ScrollMagic.Scene({
  triggerElement: "#trigger",
  triggerHook: 0.9, // show, when scrolled 10% into view
  offset: 10, // move trigger to center of element
  reverse: false,
})
  .setClassToggle("#reveal", "visible") // add class to reveal
  .addTo(controller);

const reveal = document.getElementById("reveal");

// Create a new MutationObserver instance
let observer = new MutationObserver((mutations) => {
  // Loop over the mutations
  mutations.forEach((mutation) => {
    // If the class attribute has changed
    if (mutation.attributeName === "class") {
      // If the element has the 'visible' class
      if (reveal.classList.contains("visible")) {
        // Call aboutAGroup.show()
        setTimeout(() => {
          aboutAGroup.show();
        }, 2000);
      }
    }
  });
});

// Start observing the class attribute of the reveal2 element
observer.observe(reveal, { attributes: true });

ScrollReveal().reveal(".scroll-reveal", {
  scale: 0.75,
  duration: 800,
  opacity: 0,
  easing: "ease-in-out",
});

function readMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("read-more");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

document.getElementById("read-more").addEventListener("click", readMore);

// CONTACT FORM VALIDATION //

const form = document.querySelector("form");
const fullName = document.getElementById("contact-name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail() {
  const bodyMessage = `Full Name: ${fullName.value} <br> Email: ${email.value} <br> Phone: ${phone.value} <br> Subject: ${subject.value} <br> Message: ${message.value}`;

  Email.send({
    SecureToken:"942cc080-4035-43c2-a4da-4ad5b305ea85",
    To: "hello@rosieduffy.com",
    From: "hello@rosieduffy.com",
    Subject: subject.value,
    Body: bodyMessage,
  }).then((message) => {
    if (message === "OK") {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
    }
  });
}

function checkInputs() {
  const items = document.querySelectorAll(".item");

  for (const item of items) {
    if (item.value == "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }

    if (items[1].value !== "") {
      checkEmail();
    }

    items[1].addEventListener("keyup", () => {
      checkEmail();
    });

    item.addEventListener("keyup", () => {
      if (item.value !== "") {
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      } else {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
    });
  }
}

function checkEmail() {
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
  const errorTextEmail = document.querySelector(".error-text.email");

  if (!email.value.match(emailRegex)) {
    email.classList.add("error");
    email.parentElement.classList.add("error");

    if (email.value != "") {
      errorTextEmail.textContent = "Please enter a valid email address";
    } else {
      errorTextEmail.textContent = "Email Address can't be blank";
    }
  } else {
    email.classList.remove("error");
    email.parentElement.classList.remove("error");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();

  if (
    !fullName.classList.contains("error") &&
    !email.classList.contains("error") &&
    !phone.classList.contains("error") &&
    !subject.classList.contains("error") &&
    !message.classList.contains("error")
  ) {
    sendEmail();

    form.reset();
    return false;
  }
});
