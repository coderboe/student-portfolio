
//<!-- JavaScript for theme toggle, back to top button, and fade-in animations -->
    function toggleTheme() {
      const body = document.body;
      const currentTheme = body.getAttribute("data-theme");
      if (currentTheme === "dark") {
        body.removeAttribute("data-theme");
      } else {
        body.setAttribute("data-theme", "dark");
      }
    }

    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    window.addEventListener("scroll", () => {
      const backToTop = document.getElementById("back-to-top");
      if (window.scrollY > 300) {
        backToTop.classList.add("show");
      } else {
        backToTop.classList.remove("show");
      }
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });

    document.querySelectorAll(".fade-in").forEach((el) => {
      observer.observe(el);
    });
  