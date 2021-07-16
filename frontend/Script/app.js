console.log("This is running");
/* ----------------- Nav menu toggle -------------------------*/
const menuToggle = document.querySelector(".toggle");
const showcase = document.querySelector(".showcase");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  showcase.classList.toggle("active");
});

/*! Morphext - v2.4.4 - 2015-05-21 */ 
!(function (a) {
  "use strict";
  function b(b, c) {
    (this.element = a(b)),
      (this.settings = a.extend({}, d, c)),
      (this._defaults = d),
      this._init();
  }
  var c = "Morphext",
    d = { animation: "bounceIn", separator: ",", speed: 2e3, complete: a.noop };
  (b.prototype = {
    _init: function () {
      var b = this;
      (this.phrases = []),
        this.element.addClass("morphext"),
        a.each(
          this.element.text().split(this.settings.separator),
          function (c, d) {
            b.phrases.push(a.trim(d));
          }
        ),
        (this.index = -1),
        this.animate(),
        this.start();
    },
    animate: function () {
      (this.index = ++this.index % this.phrases.length),
        (this.element[0].innerHTML =
          '<span class="animated ' +
          this.settings.animation +
          '">' +
          this.phrases[this.index] +
          "</span>"),
        a.isFunction(this.settings.complete) &&
          this.settings.complete.call(this);
    },
    start: function () {
      var a = this;
      this._interval = setInterval(function () {
        a.animate();
      }, this.settings.speed);
    },
    stop: function () {
      this._interval = clearInterval(this._interval);
    },
  }),
    (a.fn[c] = function (d) {
      return this.each(function () {
        a.data(this, "plugin_" + c) ||
          a.data(this, "plugin_" + c, new b(this, d));
      });
    });
})(jQuery);

/* ---------------------------- Rotating Text - Morphtext ------------------------ */
$("#js-rotating").Morphext({
  // The [in] animation type. Refer to Animate.css for a list of available animations.
  animation: "fadeIn",
  // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
  separator: ",",
  // The delay between the changing of each phrase in milliseconds.
  speed: 2000,
  complete: function () {
    // Called after the entrance animation is executed.
  },
});

/* ----------------  About us tabs ------------------------ */
const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});

// ================================================ Back button function ================================================
// $.fn.backButton = function () {
//   if (document.referrer !== "") {
//     $(this).show();
//     $(this).on("click", function (e) {
//       e.preventDefault();
//       window.location.href = document.referrer;
//     });
//   }
// };
// $(".back-button").backButton();
