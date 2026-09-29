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

  var form = document.querySelector("[data-demo-form]");
  if (!form) return;
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    var note = document.getElementById("form-note");
    if (note) {
      note.hidden = false;
      note.textContent = "Nothing was sent. This form stays in the browser. Field & Timber is a fictional demo and has no inbox.";
    }
    var button = form.querySelector("button[type=submit]");
    if (button) button.textContent = "Still a demo — not sent";
  });
})();
