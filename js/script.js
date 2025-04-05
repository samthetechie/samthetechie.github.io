if (document.getElementById('my-service-link')) {
  document.getElementById('my-service-link').addEventListener('click', () => {
    document.getElementById('my-service-section').scrollIntoView({behavior: "smooth"});
  });
}

if (document.getElementById('my-project-link')) {
  document.getElementById('my-project-link').addEventListener('click', () => {
    document.getElementById('my-project-section').scrollIntoView({behavior: "smooth"});
  });
}

if (document.getElementById('my-action-link')) {
  document.getElementById('my-action-link').addEventListener('click', () => {
    document.getElementById('my-action-section').scrollIntoView({behavior: "smooth"});
  });
}

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
