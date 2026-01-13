function changeText(){
    const message = document.getElementById('welcome-msg');
    message.innerHTML ="Thanks for visiting my portfolio!";
    message.style.color = "#ff6347";
    document.getElementById('year').innerText = new DataTransfer().getFullYear();
}

document.getElementById('nav-home').addEventListener('click', function() {
    document.getElementById('home-overlay').style.display = 'flex';
});

document.getElementById('nav-services').addEventListener('click', function() {
    document.getElementById('services-overlay').style.display = 'flex';
});
document.getElementById('nav-skills').addEventListener('click',function() {
    document.getElementById('skills-overlay').style.display = 'flex';
});

document.getElementById('nav-education').addEventListener('click', function() {
    document.getElementById('education-overlay').style.display = 'flex';
});

document.getElementById('nav-experience').addEventListener('click', function(){
    document.getElementById('experience-overlay').style.display = 'flex';
});

document.getElementById('nav-contact').addEventListener('click', function() {
    document.getElementById('contact-overlay').style.display = 'flex';
});
function closeBox(id) {
    document.getElementById(id).style.display = 'none';
}

Window.addEventListener('click',function(event) {
    if (event.target.classList.contains ('overlay')) {
        event.target.style.display = 'none';
    }
});