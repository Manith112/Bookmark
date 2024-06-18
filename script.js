function openTab(tabName){
    const tabContent = document.getElementsByClassName("tab");
    const tabButtons = document.getElementsByClassName("tab-button");
    for (let i = 0 ; i < tabContent.length; i++){
        tabContent[i].style.display = "none";
        tabButtons[i].classList.remove("active-tab");
        tabButtons[i].classList.add("inactive-tab");
    }
    document.getElementById(tabName).style.display = "flex";
    document.getElementById(tabName + "Btn").classList.add("active-tab");
    
}

// faq 
document.addEventListener("DOMContentLoaded", function() {
    const questions = document.querySelectorAll(".ask");
  
    questions.forEach(question => {
      question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
       
      //  up & down 
      const open = question.querySelector(".fa-solid")
      const close = question.querySelector(".close")

      if (answer.style.display === 'block') {
        answer.style.display = 'none';
      open.style.display = "none";
      close.style.display = "flex"
    } else {
        answer.style.display = 'block';
        open.style.display = "flex";
        close.style.display = "none"
    }
      });
    });
  });

  // address input 
  document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    const submitBtn = document.getElementById('contact');
    const message = document.getElementById('message');
    const errorIcon = document.getElementById('icon-error');
    const border = document.querySelector(".email-input")

    submitBtn.addEventListener('click', function() {
        const emailValue = emailInput.value;
        if (validateEmail(emailValue)) {
            errorIcon.style.display = 'none';
            alert("Success")
            message.style.display = "none"
        } else {
            message.style.display = "block"
            message.textContent = "Whoops, make sure it's an email";
            errorIcon.style.display = 'inline';
            border.style.padding = "1px";
            border.style.backgroundColor = "hsl(0, 94%, 66%)"
            
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});

// open menu mobile 
const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const closeButton = document.querySelector(".shut");
const brand = document.querySelector(".brand");
const mobileBrand = document.querySelector(".mobile-brand");
  
burger.addEventListener("click", ()=>{
  menu.style.display = "flex";
  burger.style.display = "none";
  brand.style.display = "none";
  mobileBrand.style.display = "flex";
 
})

closeButton.addEventListener("click", ()=>{
  menu.style.display = "";
  closeButton.style.display = "";
  burger.style.display = "flex";
  brand.style.display = "flex";
  mobileBrand.style.display = "";
})