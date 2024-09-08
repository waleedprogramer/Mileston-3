// Get form and display elements
var form = document.getElementById('resumeForm');
var displayInfo = document.getElementById('displayInfo');
var displayName = document.getElementById('displayName');
var displayEmail = document.getElementById('displayEmail');
var displayPhone = document.getElementById('displayPhone');
var displayEducation = document.getElementById('displayEducation');
var displayExperience = document.getElementById('displayExperience');
var displaySkills = document.getElementById('displaySkills');
// Form submit event listener
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
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
