const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const scrollProgress = document.getElementById("scrollProgress");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const openLightbox = document.getElementById("openLightbox");
const closeLightbox = document.getElementById("closeLightbox");
const heroPreview = document.getElementById("heroPreview");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu a");
const navLinks = document.querySelectorAll('a[href^="#"]');

function openLightboxWith(src, alt) {
  if (!lightbox || !lightboxImage) return;
  lightboxImage.src = src;
  lightboxImage.alt = alt || "";
  lightbox.classList.add("active");
}

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
}

mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (mobileMenu) {
      mobileMenu.classList.remove("active");
    }
  });
});

window.addEventListener("scroll", () => {
  if (!scrollProgress) return;

  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

  scrollProgress.style.width = progress + "%";
});

if (openLightbox && heroPreview) {
  openLightbox.addEventListener("click", () => {
    openLightboxWith(heroPreview.src, heroPreview.alt);
  });

  heroPreview.addEventListener("click", () => {
    openLightboxWith(heroPreview.src, heroPreview.alt);
  });
}

if (closeLightbox && lightbox) {
  closeLightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove("active");
    }
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && lightbox && lightbox.classList.contains("active")) {
    lightbox.classList.remove("active");
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");

    if (!targetId || !targetId.startsWith("#")) return;

    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();

    const headerOffset = 80;
    const targetPosition =
      target.getBoundingClientRect().top + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  });
});
