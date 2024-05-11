// Page Scroll Progress Indicator

function update () {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.querySelector('.filled').style.width = scrolled + "%";
    requestAnimationFrame(update);
}

update();
