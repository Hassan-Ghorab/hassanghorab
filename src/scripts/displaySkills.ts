import skillsArray from "./skillsArray";
import { Skill } from "./interfaces";

function renderSkills(skills: Skill[]): void {
  const fragment: DocumentFragment = document.createDocumentFragment();
  const dataListEl: HTMLElement | null =
    document.getElementById("skills-data-list");

  if (!dataListEl) {
    console.error("Skills container not found");
    return;
  }

  skills.forEach((skill: Skill) => {
    const div: HTMLElement = document.createElement("div");
    div.className = "matrix";

    const dt: HTMLElement = document.createElement("dt");
    dt.textContent = skill.title;

    const dd: HTMLElement = document.createElement("dd");
    dd.innerHTML = skill.svg;

    div.appendChild(dt);
    div.appendChild(dd);

    fragment.appendChild(div);
  });

  dataListEl.appendChild(fragment);
}

renderSkills(skillsArray);
