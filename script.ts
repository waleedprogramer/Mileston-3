// Get form and display elements
const form = document.getElementById('resumeForm') as HTMLFormElement;
const displayInfo = document.getElementById('displayInfo') as HTMLElement;
const displayName = document.getElementById('displayName') as HTMLElement;
const displayEmail = document.getElementById('displayEmail') as HTMLElement;
const displayPhone = document.getElementById('displayPhone') as HTMLElement;
const displayEducation = document.getElementById('displayEducation') as HTMLElement;
const displayExperience = document.getElementById('displayExperience') as HTMLElement;
const displaySkills = document.getElementById('displaySkills') as HTMLElement;

// Form submit event listener
form.addEventListener('submit', (event: Event) => {
  event.preventDefault(); 
  
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLTextAreaElement).value;
  const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
  const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

  if (!name || !email || !phone || !education || !experience || !skills) {
    alert('All fields are required!');
    return;
  }

  displayName.textContent = name;
  displayEmail.textContent = email;
  displayPhone.textContent = phone;
  displayEducation.textContent = education;
  displayExperience.textContent = experience;
  displaySkills.textContent = skills;

  displayInfo.classList.remove('hidden');
});
