/**
 * Portfolio entry point (ES module).
 */
import { portfolioData } from "./data.js";

const {
  personalInfo,
  socialLinks,
  education,
  skills,
  projects,
  learningJourney,
} = portfolioData;

const THEME_STORAGE_KEY = "shawon-theme";
const MOBILE_NAV_BREAKPOINT = 860;
const SVG_NS = "http://www.w3.org/2000/svg";

// Map skill names to Devicon classes for authentic colored tech icons
const skillDeviconMap = {
  C: "devicon-c-plain colored",
  Java: "devicon-java-plain colored",
  JavaScript: "devicon-javascript-plain colored",
  HTML5: "devicon-html5-plain colored",
  CSS3: "devicon-css3-plain colored",
  "React.js": "devicon-react-original colored",
  React: "devicon-react-original colored",
  "Node.js": "devicon-nodejs-plain colored",
  "Express.js": "devicon-express-original",
  MySQL: "devicon-mysql-original colored",
  MongoDB: "devicon-mongodb-plain colored",
  Git: "devicon-git-plain colored",
  GitHub: "devicon-github-original",
  "Visual Studio Code": "devicon-vscode-plain colored",
  TypeScript: "devicon-typescript-plain colored",
  "Next.js": "devicon-nextjs-plain",
  "Tailwind CSS": "devicon-tailwindcss-original colored",
  "Full Stack Web Development": "devicon-devicon-plain colored",
};

function getByPath(path) {
  return path.split(".").reduce((value, key) => {
    return value === null || value === undefined ? undefined : value[key];
  }, portfolioData);
}

function createElement(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined && text !== null) node.textContent = String(text);
  return node;
}

const iconShapes = {
  code: [{ tag: "path", attrs: { d: "M16 18l6-6-6-6M8 6l-6 6 6 6" } }],
  layout: [
    { tag: "rect", attrs: { x: 3, y: 3, width: 18, height: 18, rx: 2 } },
    { tag: "path", attrs: { d: "M3 9h18M9 9v12" } },
  ],
  server: [
    { tag: "rect", attrs: { x: 3, y: 4, width: 18, height: 7, rx: 2 } },
    { tag: "rect", attrs: { x: 3, y: 13, width: 18, height: 7, rx: 2 } },
    { tag: "path", attrs: { d: "M7 7.5h.01M7 16.5h.01" } },
  ],
  database: [
    { tag: "ellipse", attrs: { cx: 12, cy: 5, rx: 8, ry: 3 } },
    {
      tag: "path",
      attrs: {
        d: "M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3",
      },
    },
  ],
  terminal: [{ tag: "path", attrs: { d: "M5 7l5 5-5 5M13 17h6" } }],
  sparkles: [
    {
      tag: "path",
      attrs: {
        d: "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z",
      },
    },
    {
      tag: "path",
      attrs: {
        d: "M19 16l.7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16z",
      },
    },
  ],
  external: [
    { tag: "path", attrs: { d: "M14 4h6v6M20 4l-9 9M18 14v6H4V6h6" } },
  ],
  github: [
    {
      tag: "path",
      attrs: {
        d: "M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-1.93c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.24 2.75.12 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .3.21.67.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z",
      },
    },
  ],
  linkedin: [
    {
      tag: "path",
      attrs: {
        d: "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .78 0 1.74v20.52C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.74V1.74C24 .78 23.2 0 22.22 0z",
      },
    },
  ],
  mail: [
    { tag: "rect", attrs: { x: 3, y: 5, width: 18, height: 14, rx: 2 } },
    { tag: "path", attrs: { d: "M3 7l9 6 9-6" } },
  ],
};

function createIcon(name) {
  const svg = document.createElementNS(SVG_NS, "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("class", "icon");
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("focusable", "false");
  const isFilled = name === "github" || name === "linkedin";
  svg.setAttribute("fill", isFilled ? "currentColor" : "none");
  svg.setAttribute("stroke", isFilled ? "none" : "currentColor");
  svg.setAttribute("stroke-width", "1.7");
  svg.setAttribute("stroke-linecap", "round");
  svg.setAttribute("stroke-linejoin", "round");

  const shapes = iconShapes[name] || iconShapes.code;
  shapes.forEach(({ tag, attrs }) => {
    const shape = document.createElementNS(SVG_NS, tag);
    Object.entries(attrs).forEach(([key, value]) =>
      shape.setAttribute(key, String(value)),
    );
    svg.append(shape);
  });

  return svg;
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove("is-visible"), 2400);
}

function applyBindings() {
  document.querySelectorAll("[data-bind]").forEach((node) => {
    const value = getByPath(node.dataset.bind);
    if (value !== undefined && value !== null) node.textContent = String(value);
  });

  [
    ["data-bind-src", "src"],
    ["data-bind-alt", "alt"],
    ["data-bind-href", "href"],
  ].forEach(([dataAttribute, htmlAttribute]) => {
    document.querySelectorAll(`[${dataAttribute}]`).forEach((node) => {
      const value = getByPath(node.getAttribute(dataAttribute));
      if (value !== undefined && value !== null) {
        node.setAttribute(htmlAttribute, String(value));
      }
    });
  });
}

function renderAbout() {
  const mount = document.querySelector('[data-render="about"]');
  if (!mount || !Array.isArray(personalInfo.about)) return;
  mount.replaceChildren(
    ...personalInfo.about.map((text) => createElement("p", null, text)),
  );
}

function renderAboutAside() {
  const mount = document.querySelector('[data-render="about-aside"]');
  if (!mount) return;

  const primaryEducation = Array.isArray(education) ? education[0] : null;
  const learning = (Array.isArray(skills) ? skills : [])
    .filter((group) => group.status === "learning")
    .flatMap((group) => group.items || [])
    .join(", ");
  const interests = Array.isArray(personalInfo.interests)
    ? personalInfo.interests.join(", ")
    : "";

  const rows = [
    ["Location", personalInfo.location],
    ["Focus", personalInfo.headline],
    ["Interests", interests],
    [
      "Education",
      primaryEducation
        ? `${primaryEducation.qualification} — ${primaryEducation.institution}`
        : null,
    ],
    ["Currently learning", learning],
  ];

  const card = createElement("div", "glance-card spotlight-card");
  card.append(createElement("h3", null, "At a glance"));

  const list = createElement("dl", "glance-list");
  rows
    .filter(([, value]) => value)
    .forEach(([label, value]) => {
      const item = createElement("div", "glance-item");
      item.append(
        createElement("dt", null, label),
        createElement("dd", null, value),
      );
      list.append(item);
    });

  card.append(list);
  mount.replaceChildren(card);
}

function renderSkills() {
  const mount = document.querySelector('[data-render="skills"]');
  if (!mount || !Array.isArray(skills)) return;

  const cards = skills.map((group) => {
    const isLearning = group.status === "learning";
    const card = createElement(
      "article",
      isLearning
        ? "skill-card skill-card--learning spotlight-card"
        : "skill-card spotlight-card",
    );

    const header = createElement("div", "skill-card-header");
    const iconWrap = createElement("span", "skill-icon-wrap");
    iconWrap.append(createIcon(group.icon));

    const headerText = createElement("div", "skill-header-text");
    const countLabel = `${(group.items || []).length} ${(group.items || []).length === 1 ? "skill" : "skills"}`;
    headerText.append(
      createElement("h3", null, group.category),
      createElement("span", "skill-count", countLabel),
    );

    header.append(iconWrap, headerText);
    if (isLearning)
      header.append(createElement("span", "skill-status", "In progress"));

    const list = createElement("ul", "skill-items");
    list.setAttribute("role", "list");

    (group.items || []).forEach((item) => {
      const li = createElement("li", "skill-badge");
      const deviconClass = skillDeviconMap[item];
      if (deviconClass) {
        const iconEl = createElement("i", deviconClass);
        iconEl.setAttribute("aria-hidden", "true");
        li.append(iconEl);
      }
      li.append(createElement("span", null, item));
      list.append(li);
    });

    card.append(header, list);
    return card;
  });

  mount.replaceChildren(...cards);
}

function renderEducation() {
  const mount = document.querySelector('[data-render="education"]');
  if (!mount || !Array.isArray(education)) return;

  const entries = education.map((entry) => {
    const item = createElement("article", "timeline-item");
    const marker = createElement("span", "timeline-marker");
    marker.setAttribute("aria-hidden", "true");

    const content = createElement("div", "timeline-content spotlight-card");
    content.append(
      createElement("span", "timeline-level", entry.level),
      createElement("h3", null, entry.institution),
      createElement("p", "timeline-qualification", entry.qualification),
    );

    const details = createElement("ul", "timeline-details");
    details.setAttribute("role", "list");
    (entry.details || []).forEach((detail) => {
      const row = createElement("li", "timeline-detail");
      row.append(
        createElement("span", "timeline-detail-label", detail.label),
        createElement("span", "timeline-detail-value", detail.value),
      );
      details.append(row);
    });
    content.append(details);

    item.append(marker, content);
    return item;
  });

  mount.replaceChildren(...entries);
}

function createProjectLink(href, label, iconName, accessibleName) {
  const link = createElement("a", "project-link");
  link.setAttribute("href", href);
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener noreferrer");
  link.setAttribute("aria-label", accessibleName);
  link.append(createElement("span", null, label), createIcon(iconName));
  return link;
}

function renderProjects() {
  const mount = document.querySelector('[data-render="projects"]');
  if (!mount || !Array.isArray(projects)) return;

  const cards = projects.map((project) => {
    const card = createElement("article", "project-card spotlight-card");

    const media = createElement("div", "project-media");
    const placeholder = createElement("div", "project-placeholder");
    placeholder.append(
      createElement("span", "project-placeholder-index", project.index || "—"),
      createElement(
        "span",
        "project-placeholder-label",
        "Preview image coming soon",
      ),
    );

    const image = createElement("img");
    image.setAttribute("src", project.image);
    image.setAttribute(
      "alt",
      project.imageAlt || `Preview of ${project.title}`,
    );
    image.setAttribute("loading", "lazy");
    image.setAttribute("decoding", "async");
    image.setAttribute("width", "960");
    image.setAttribute("height", "540");
    image.addEventListener("load", () => card.classList.add("is-loaded"), {
      once: true,
    });
    image.addEventListener("error", () => card.classList.remove("is-loaded"), {
      once: true,
    });
    media.append(placeholder, image);

    const body = createElement("div", "project-body");
    body.append(
      createElement(
        "span",
        "project-index",
        `Project ${project.index || ""}`.trim(),
      ),
      createElement("h3", "project-title", project.title),
      createElement("p", "project-description", project.description),
    );

    const tech = createElement("ul", "project-tech");
    tech.setAttribute("role", "list");
    (project.technologies || []).forEach((item) => {
      tech.append(createElement("li", "project-tag", item));
    });
    body.append(tech);

    const urls = project.links || {};
    const linkList = createElement("ul", "project-links");
    linkList.setAttribute("role", "list");
    if (urls.live) {
      const item = createElement("li");
      item.append(
        createProjectLink(
          urls.live,
          "Live Demo",
          "external",
          `View live demo of ${project.title}`,
        ),
      );
      linkList.append(item);
    }
    if (urls.github) {
      const item = createElement("li");
      item.append(
        createProjectLink(
          urls.github,
          "GitHub",
          "github",
          `View source code for ${project.title} on GitHub`,
        ),
      );
      linkList.append(item);
    }
    if (linkList.children.length > 0) body.append(linkList);

    card.append(media, body);
    return card;
  });

  mount.replaceChildren(...cards);
}

function renderLearningJourney() {
  const mount = document.querySelector('[data-render="learning"]');
  if (!mount || !Array.isArray(learningJourney)) return;

  const items = learningJourney.map((stage, index) => {
    const item = createElement("li", "learning-item");
    const card = createElement("div", "learning-card spotlight-card");
    const marker = createElement(
      "span",
      "learning-marker",
      String(index + 1).padStart(2, "0"),
    );
    marker.setAttribute("aria-hidden", "true");

    card.append(
      marker,
      createElement("h3", null, stage.title),
      createElement("p", null, stage.description),
    );
    item.append(card);
    return item;
  });

  mount.replaceChildren(...items);
}

function renderContact() {
  const mount = document.querySelector('[data-render="contact"]');
  if (!mount) return;

  const email = personalInfo && personalInfo.email;
  const links = socialLinks || {};
  const cards = [];

  if (email) {
    const wrapper = createElement("div", "contact-card spotlight-card");
    const iconWrap = createElement("span", "contact-card-icon");
    iconWrap.append(createIcon("mail"));

    const info = createElement("a", "contact-card-info");
    info.setAttribute("href", `mailto:${email}`);
    info.append(
      createElement("span", "contact-card-label", "Email"),
      createElement("span", "contact-card-value", email),
    );

    const copyBtn = createElement("button", "copy-email-btn", "Copy");
    copyBtn.setAttribute("type", "button");
    copyBtn.setAttribute("aria-label", "Copy email address");
    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(email);
        showToast("Email copied to clipboard!");
      } catch {
        showToast("Could not copy email.");
      }
    });

    wrapper.append(iconWrap, info, copyBtn);
    cards.push(wrapper);
  }

  [
    {
      icon: "github",
      label: "GitHub",
      value: links.github,
      href: links.github,
    },
    {
      icon: "linkedin",
      label: "LinkedIn",
      value: links.linkedin,
      href: links.linkedin,
    },
  ]
    .filter((item) => item.href)
    .forEach((item) => {
      const link = createElement("a", "contact-card spotlight-card");
      link.setAttribute("href", item.href);
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");

      const iconWrap = createElement("span", "contact-card-icon");
      iconWrap.append(createIcon(item.icon));

      const info = createElement("span", "contact-card-info");
      info.append(
        createElement("span", "contact-card-label", item.label),
        createElement("span", "contact-card-value", item.value),
      );

      link.append(iconWrap, info);
      cards.push(link);
    });

  mount.replaceChildren(...cards);
}

function renderFooterSocials() {
  const mount = document.querySelector('[data-render="footer-socials"]');
  if (!mount) return;

  const urls = socialLinks || {};
  const items = [
    { icon: "github", url: urls.github, label: "GitHub profile" },
    { icon: "linkedin", url: urls.linkedin, label: "LinkedIn profile" },
  ].filter((item) => item.url);

  const links = items.map((item) => {
    const link = createElement("a", "social-link");
    link.setAttribute("href", item.url);
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
    link.setAttribute("aria-label", `${item.label} (opens in a new tab)`);
    link.append(createIcon(item.icon));
    return link;
  });

  mount.replaceChildren(...links);
}

function initYear() {
  const node = document.querySelector("#year");
  if (node) node.textContent = String(new Date().getFullYear());
}

function initContactForm() {
  const form = document.querySelector("#contact-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const to = personalInfo && personalInfo.email;
    if (!to) return;

    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    const subject = `Portfolio message from ${name}`;
    const body = `${message}\n\nFrom: ${name}\nEmail: ${email}`;

    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

function initScrollEffects() {
  const progressBar = document.querySelector("#scroll-progress");
  const header = document.querySelector("#site-header");
  const backToTop = document.querySelector("#back-to-top");

  const update = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    if (progressBar && docHeight > 0) {
      progressBar.style.width = `${Math.min((scrollTop / docHeight) * 100, 100)}%`;
    }
    if (header) header.classList.toggle("is-scrolled", scrollTop > 16);
    if (backToTop) backToTop.classList.toggle("is-visible", scrollTop > 400);
  };

  update();
  window.addEventListener("scroll", update, { passive: true });

  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion() ? "auto" : "smooth",
      });
    });
  }
}

function initSpotlight() {
  if (prefersReducedMotion()) return;
  document.addEventListener("mousemove", (event) => {
    const card = event.target.closest(".spotlight-card");
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
    card.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
  });
}

function initProfileImage() {
  const figure = document.querySelector("[data-image-fallback]");
  if (!figure) return;
  const image = figure.querySelector("img");
  if (!image) return;

  const reveal = () => figure.classList.add("is-loaded");
  if (image.complete && image.naturalWidth > 0) {
    reveal();
    return;
  }
  image.addEventListener("load", reveal, { once: true });
  image.addEventListener("error", () => figure.classList.remove("is-loaded"), {
    once: true,
  });
}

function prefersReducedMotion() {
  return (
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function readStoredTheme() {
  try {
    return window.localStorage.getItem(THEME_STORAGE_KEY);
  } catch {
    return null;
  }
}

function storeTheme(theme) {
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {}
}

function applyTheme(theme, persist = false) {
  const resolved = theme === "light" ? "light" : "dark";
  document.documentElement.dataset.theme = resolved;

  const toggle = document.querySelector("#theme-toggle");
  if (toggle) {
    toggle.setAttribute("aria-pressed", String(resolved === "light"));
    toggle.setAttribute(
      "aria-label",
      resolved === "light" ? "Switch to dark theme" : "Switch to light theme",
    );
  }

  const themeColor = document.querySelector('meta[name="theme-color"]');
  if (themeColor) {
    themeColor.setAttribute(
      "content",
      resolved === "light" ? "#F8FAFC" : "#090B10",
    );
  }

  if (persist) storeTheme(resolved);
}

function initTheme() {
  const stored = readStoredTheme();
  applyTheme(stored === "light" || stored === "dark" ? stored : "dark");

  const toggle = document.querySelector("#theme-toggle");
  if (!toggle) return;

  toggle.addEventListener("click", () => {
    const current =
      document.documentElement.dataset.theme === "light" ? "light" : "dark";
    applyTheme(current === "light" ? "dark" : "light", true);
  });
}

function initNavigation() {
  const toggle = document.querySelector("#nav-toggle");
  const nav = document.querySelector("#primary-nav");
  if (!toggle || !nav) return;

  const setOpen = (open) => {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute(
      "aria-label",
      open ? "Close navigation menu" : "Open navigation menu",
    );
  };

  const close = (returnFocus = false) => {
    if (toggle.getAttribute("aria-expanded") !== "true") return;
    setOpen(false);
    if (returnFocus) toggle.focus();
  };

  toggle.addEventListener("click", () => {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) close();
  });

  document.addEventListener("click", (event) => {
    const header = document.querySelector(".site-header");
    if (header && !header.contains(event.target)) close();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") close(true);
  });

  window.addEventListener(
    "resize",
    () => {
      if (window.innerWidth > MOBILE_NAV_BREAKPOINT) close();
    },
    { passive: true },
  );
}

function initActiveNav() {
  const links = Array.from(document.querySelectorAll(".primary-nav .nav-link"));
  if (!links.length || typeof IntersectionObserver !== "function") return;

  const linkedSections = new Map();
  links.forEach((link) => {
    const hash = link.getAttribute("href") || "";
    if (!hash.startsWith("#") || hash === "#") return;
    const section = document.getElementById(hash.slice(1));
    if (section) linkedSections.set(section, link);
  });
  if (!linkedSections.size) return;

  const setActive = (activeLink) => {
    links.forEach((link) => {
      const isActive = link === activeLink;
      link.classList.toggle("is-active", isActive);
      if (isActive) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  };

  const visible = new Map();
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting)
          visible.set(entry.target, entry.boundingClientRect.top);
        else visible.delete(entry.target);
      });
      if (!visible.size) return;
      const closest = Array.from(visible.entries()).sort(
        (a, b) => Math.abs(a[1]) - Math.abs(b[1]),
      )[0];
      setActive(linkedSections.get(closest[0]));
    },
    { rootMargin: "-40% 0px -45% 0px", threshold: 0 },
  );

  linkedSections.forEach((_link, section) => observer.observe(section));
}

function initReveal() {
  const root = document.documentElement;
  if (
    !root ||
    typeof IntersectionObserver !== "function" ||
    prefersReducedMotion()
  )
    return;

  const selectors = [
    ".about-copy > p",
    ".glance-card",
    ".skill-card",
    ".project-card",
    ".timeline-item",
    ".learning-item",
    ".contact-card",
    ".contact-form",
  ];

  const targets = [];
  selectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((node) => {
      node.setAttribute("data-reveal", "");
      targets.push(node);
    });
  });
  if (!targets.length) return;

  root.classList.add("reveal-ready");

  const observer = new IntersectionObserver(
    (entries, activeObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        activeObserver.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
  );

  targets.forEach((node) => observer.observe(node));
}

function initTypingEffect() {
  const target = document.querySelector("#typing-text");
  const items =
    personalInfo && Array.isArray(personalInfo.typingItems)
      ? personalInfo.typingItems
      : [];
  if (!target || !items.length) return;

  if (prefersReducedMotion()) {
    target.textContent = items[0];
    return;
  }

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const typeSpeed = 95; // Typing speed (ms)
  const deleteSpeed = 55; // Deleting speed (ms)
  const pauseAfterType = 1600; // Kotokkhon theme thakbe (ms)
  const pauseAfterDelete = 350;

  function tick() {
    const currentWord = items[wordIndex];

    if (isDeleting) {
      charIndex--;
      target.textContent = currentWord.slice(0, charIndex);
    } else {
      charIndex++;
      target.textContent = currentWord.slice(0, charIndex);
    }

    let delay = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      delay = pauseAfterType;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % items.length;
      delay = pauseAfterDelete;
    }

    setTimeout(tick, delay);
  }

  target.textContent = "";
  setTimeout(tick, 400);
}

function init() {
  initTheme();
  initNavigation();
  applyBindings();
  initTypingEffect();
  renderAbout();
  renderAboutAside();
  renderSkills();
  renderEducation();
  renderProjects();
  renderLearningJourney();
  renderContact();
  renderFooterSocials();
  initYear();
  initContactForm();
  initScrollEffects();
  initSpotlight();
  initProfileImage();
  initActiveNav();
  initReveal();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init, { once: true });
} else {
  init();
}
