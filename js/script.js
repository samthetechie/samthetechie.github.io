if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
  })
}

var myMenu; window.onload = function() {
            myMenu = new SDMenu("my_menu");
            myMenu.init();
          };