if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"});
  });
}

if (document.getElementById('my-project-link')) {
  document.getElementById('my-project-link').addEventListener('click', () => {
    document.getElementById('my-project-section').scrollIntoView({behavior: "smooth"});
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

document.querySelector("input, textarea").addEventListener("focusout", function(){
    document.querySelector('meta[name=viewport]').remove();
    document.head.insertAdjacentHTML('beforeend', '<meta name="viewport" content="width=device-width, maximum-scale=1.0, user-scalable=0">');

    document.querySelector('meta[name=viewport]').remove();
    document.head.insertAdjacentHTML('beforeend', '<meta name="viewport" content="width=device-width, initial-scale=yes">' );
});