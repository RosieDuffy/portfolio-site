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
