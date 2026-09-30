(function () {
  var head = document.querySelector(".site-head");
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && head && nav) {
    toggle.addEventListener("click", function () {
      var open = head.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        head.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  var sectionLinks = nav ? nav.querySelectorAll('a[href^="#"]') : [];
  if (sectionLinks.length && "IntersectionObserver" in window) {
    var watched = [];
    sectionLinks.forEach(function (link) {
      var section = document.getElementById(link.getAttribute("href").slice(1));
      if (section) watched.push({ link: link, section: section });
    });
    var current = nav.querySelector("[aria-current]");
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        if (current) current.removeAttribute("aria-current");
        watched.forEach(function (item) {
          if (item.section === entry.target) {
            item.link.setAttribute("aria-current", "page");
            current = item.link;
          }
        });
      });
    }, { rootMargin: "-45% 0px -45% 0px", threshold: 0 });
    watched.forEach(function (item) { spy.observe(item.section); });
  }

  var slides = document.querySelectorAll(".slides li");
  var dots = document.querySelectorAll(".dots button");
  if (slides.length > 1 && dots.length === slides.length) {
    var index = 0;
    var timer = null;
    var still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var show = function (next) {
      slides[index].classList.remove("is-on");
      dots[index].setAttribute("aria-current", "false");
      index = next;
      slides[index].classList.add("is-on");
      dots[index].setAttribute("aria-current", "true");
    };
    var start = function () {
      if (still) return;
      clearInterval(timer);
      timer = setInterval(function () { show((index + 1) % slides.length); }, 6000);
    };
    dots.forEach(function (dot, i) {
      dot.addEventListener("click", function () {
        show(i);
        start();
      });
    });
    start();
  }

  var setLabel = function (button, text) {
    var node = button.childNodes[0];
    if (node && node.nodeType === 3) node.nodeValue = text;
  };
  var moreWorks = document.getElementById("more-works");
  var works = document.getElementById("works-grid");
  if (moreWorks && works) {
    moreWorks.addEventListener("click", function () {
      var open = works.classList.toggle("is-open");
      moreWorks.setAttribute("aria-expanded", open ? "true" : "false");
      setLabel(moreWorks, open ? "Show less " : "View All Works ");
      if (open) {
        var extra = works.querySelector(".is-more");
        if (extra) extra.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  }
  var moreAbout = document.getElementById("more-about");
  var aboutMore = document.getElementById("about-more");
  if (moreAbout && aboutMore) {
    moreAbout.addEventListener("click", function () {
      var open = aboutMore.hidden;
      aboutMore.hidden = !open;
      moreAbout.setAttribute("aria-expanded", open ? "true" : "false");
      setLabel(moreAbout, open ? "Show less " : "Learn More ");
    });
  }
})();
