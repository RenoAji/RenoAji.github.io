const fs = require("fs");
const path = require("path");

const ROOT_DIR = path.resolve(__dirname, "..");
const INDEX_PATH = path.join(ROOT_DIR, "index.html");
const PROJECTS_PATH = path.join(ROOT_DIR, "data", "projects.json");

const PROJECT_START = "<!-- PROJECT_CARDS_START -->";
const PROJECT_END = "<!-- PROJECT_CARDS_END -->";

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderTag(tag) {
  const className = escapeHtml(tag.className || "bg-gray-100 text-gray-800");
  const label = escapeHtml(tag.label || "Tag");
  return `                  <span\n                    class="${className} text-xs font-semibold px-3 py-1 rounded-full"\n                    >${label}</span\n                  >`;
}

function renderLink(link) {
  const href = escapeHtml(link.href || "#");
  const label = escapeHtml(link.label || "Visit");
  const icon = escapeHtml(link.icon || "fas fa-link");
  const className = escapeHtml(
    link.className || "bg-gray-700 text-white hover:bg-gray-800",
  );

  return `                  <a\n                    href="${href}"\n                    target="_blank"\n                    class="w-full flex items-center justify-center gap-2 text-center ${className} font-semibold py-2 px-4 rounded-lg transition-colors duration-300"\n                  >\n                    <i class="${icon}"></i>\n                    ${label}\n                  </a>`;
}

function renderProjectCard(project) {
  const title = escapeHtml(project.title || "Untitled Project");
  const image = escapeHtml(project.image || "");
  const alt = escapeHtml(project.alt || `${title} Screenshot`);
  const description = escapeHtml(project.description || "");

  const tags = Array.isArray(project.tags)
    ? project.tags.map(renderTag).join("\n")
    : "";

  const links = Array.isArray(project.links)
    ? project.links.map(renderLink).join("\n")
    : "";

  return `            <div\n              class="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transform hover:-translate-y-2 transition-all duration-300 max-w-sm w-full"\n            >\n              <img\n                src="${image}"\n                alt="${alt}"\n                class="w-full h-56 object-cover"\n              />\n              <div class="p-6 flex flex-col flex-grow">\n                <h3 class="text-xl font-bold mb-2">${title}</h3>\n                <p class="text-gray-600 mb-4 flex-grow">\n                  ${description}\n                </p>\n                <div class="flex flex-wrap gap-2 mb-6">\n${tags}\n                </div>\n                <div class="mt-auto flex gap-4">\n${links}\n                </div>\n              </div>\n            </div>`;
}

function main() {
  const indexContent = fs.readFileSync(INDEX_PATH, "utf8");
  const projects = JSON.parse(fs.readFileSync(PROJECTS_PATH, "utf8"));

  if (
    !indexContent.includes(PROJECT_START) ||
    !indexContent.includes(PROJECT_END)
  ) {
    throw new Error(
      `Could not find ${PROJECT_START} and ${PROJECT_END} markers in index.html.`,
    );
  }

  const cards = projects.map(renderProjectCard).join("\n\n");
  const replacement = `${PROJECT_START}\n${cards}\n            ${PROJECT_END}`;

  const output = indexContent.replace(
    /<!-- PROJECT_CARDS_START -->[\s\S]*<!-- PROJECT_CARDS_END -->/,
    replacement,
  );

  fs.writeFileSync(INDEX_PATH, output, "utf8");
  console.log(`Generated ${projects.length} project cards into index.html`);
}

main();
