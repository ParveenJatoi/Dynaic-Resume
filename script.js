function generatePreview() {
  // Basic details
  document.getElementById("previewFullName").innerText = document.getElementById("fullName").value;
  document.getElementById("previewJobTitle").innerText = document.getElementById("jobTitle").value;
  document.getElementById("previewEmail").innerText = document.getElementById("email").value;
  document.getElementById("previewPhone").innerText = document.getElementById("phone").value;
  document.getElementById("previewAddress").innerText = document.getElementById("address").value;
  document.getElementById("previewSummary").innerText = document.getElementById("summary").value;
  document.getElementById("previewSkills").innerText = document.getElementById("skills").value;

  // Education
  const eduPreview = document.getElementById("previewEducation");
  eduPreview.innerHTML = "";
  document.querySelectorAll(".education-entry").forEach(entry => {
    const degree = entry.querySelector(".degree").value;
    const institution = entry.querySelector(".institution").value;
    const year = entry.querySelector(".year").value;
    const eduItem = document.createElement("p");
    eduItem.textContent = `${degree}, ${institution} (${year})`;
    eduPreview.appendChild(eduItem);
  });

  // Experience
  const expPreview = document.getElementById("previewExperience");
  expPreview.innerHTML = "";
  document.querySelectorAll(".experience-entry").forEach(entry => {
    const jobTitle = entry.querySelector(".exp-jobTitle").value;
    const company = entry.querySelector(".exp-company").value;
    const years = entry.querySelector(".exp-years").value;
    const expItem = document.createElement("p");
    expItem.textContent = `${jobTitle}, ${company} (${years})`;
    expPreview.appendChild(expItem);
  });
}

function addEducation() {
  const eduSection = document.getElementById("educationSection");
  const newEdu = document.createElement("div");
  newEdu.className = "education-entry";
  newEdu.innerHTML = `
    <label>Degree:</label><input type="text" class="degree">
    <label>Institution:</label><input type="text" class="institution">
    <label>Year:</label><input type="text" class="year">
  `;
  eduSection.appendChild(newEdu);
}

function addExperience() {
  const expSection = document.getElementById("experienceSection");
  const newExp = document.createElement("div");
  newExp.className = "experience-entry";
  newExp.innerHTML = `
    <label>Job Title:</label><input type="text" class="exp-jobTitle">
    <label>Company:</label><input type="text" class="exp-company">
    <label>Years:</label><input type="text" class="exp-years">
  `;
  expSection.appendChild(newExp);
}

function updateThemeColor() {
  const themeColor = document.getElementById("themeColor").value;
  document.querySelector(".resume-preview").style.backgroundColor = themeColor;
}

function previewImage(event) {
  const reader = new FileReader();
  reader.onload = function() {
    const preview = document.getElementById("profilePreview");
    preview.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
}

function downloadPDF() {
  const resumeContent = document.querySelector('.resume-preview');
  html2pdf()
    .from(resumeContent)
    .save('resume.pdf');
}
