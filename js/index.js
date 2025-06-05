
const body = document.body;
const footer = document.createElement("footer");
footer.textContent = "@ 2025 My company";
body.appendChild(footer);

const today = new Date();
const thisYear = today.getFullYear();
const footer1 = document.querySelector("footer");
const copyright = document.createElement("p");
copyright.innerHTML = `&copy; Ivan ${thisYear}`;
footer.appendChild(copyright);

const skills = ["JavaScript", "HTML", "CSS", "Adobe Photoshop", "GitHub"];
const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");
for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
}