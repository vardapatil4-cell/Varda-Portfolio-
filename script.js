document.documentElement.classList.add("js-ready");

const $$ = (selector) => [...document.querySelectorAll(selector)];

const revealItems = $$(".rv");

const reveal = (el) => {
  if (el) el.classList.add("in");
};

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          reveal(entry.target);
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((el) => revealObserver.observe(el));
} else {
  revealItems.forEach(reveal);
}

const links = $$("nav a");
const sections = links
  .map((a) => document.querySelector(a.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window && sections.length) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((link) => {
            link.classList.toggle(
              "on",
              link.getAttribute("href") === "#" + entry.target.id
            );
          });
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );

  sections.forEach((section) => sectionObserver.observe(section));
}

const nav = document.getElementById("nav");
const menu = document.getElementById("menu");

if (menu && nav) {
  menu.setAttribute("aria-expanded", "false");

  menu.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menu.setAttribute("aria-expanded", String(open));
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menu.setAttribute("aria-expanded", "false");
    });
  });
}

$$(".proj button").forEach((button) => {
  button.addEventListener("click", () => {
    const project = button.parentElement;
    const open = project.classList.toggle("open");
    button.setAttribute("aria-expanded", String(open));
  });
});
