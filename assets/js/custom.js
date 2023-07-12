window.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggle-toc");
    const tocContent = document.getElementById("toc-content");
  
    toggleButton.addEventListener("click", function() {
      tocContent.classList.toggle("hidden");
    });
  
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
  