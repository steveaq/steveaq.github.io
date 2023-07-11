window.addEventListener("DOMContentLoaded", function() {
    const tocWrapper = document.getElementById("toc-wrapper");
    if (tocWrapper) {
      const offsetTop = tocWrapper.offsetTop;
      window.addEventListener("scroll", function() {
        if (window.pageYOffset >= offsetTop) {
          tocWrapper.classList.add("fixed");
        } else {
          tocWrapper.classList.remove("fixed");
        }
      });
    }
  });
  