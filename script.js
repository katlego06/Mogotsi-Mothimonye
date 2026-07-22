const project = document.getElementById('quick_link1')
const skills_btn = document.getElementById('quick_link2')
const pro_box = document.getElementById('pro-box')
const skills = document.getElementById('skills')
const pro_header = document.getElementById('pro-skill-header')
const skills_header = document.getElementById('skill_header')

project.addEventListener('click', function() {
    pro_box.style.display = "flex";
    pro_header.style.display = "flex";
    pro_box.style.transition = 'opacity 0.5s ease, visibility 0.5s ease';
    skills.style.display = "none";
    skills_header.style.display = "none";
})

skills_btn.addEventListener('click', function() {
    pro_box.style.display = "none";
    pro_header.style.display = "none";
    skills.style.display = "grid";
    skills_header.style.display = "block";
    skills.style.transition = 'opacity 0.5s ease, visibility 0.5s ease';
})