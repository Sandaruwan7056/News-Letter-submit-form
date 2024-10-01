function return_validate_email() {
    const email_box = document.getElementById('email-box');
    const email = email_box.value;
    const error_message = document.getElementById('error-message');

    const email_pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;


    if (!email_pattern.test(email)) {
        error_message.textContent = "Valid email required";
        error_message.style.color = "red";
        email_box.classList.add('error');
        return false;
    }

    error_message.textContent = "";
    email_box.classList.remove('error');
    return true;
}

const email_box = document.getElementById('email-box');
const error_message = document.getElementById('error-message');


email_box.addEventListener("input", function () {
    if (email_box.classList.contains('error')) {
        email_box.classList.remove('error');
        error_message.textContent = "";
    }
});


const submitBtn = document.getElementById("subscribe-btn");
const dismissBtn = document.getElementById("dismiss-btn");
const message = document.getElementById("message");
const contentArea = document.querySelector(".content__area");
const para=document.getElementById("para");

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const email_box = document.getElementById('email-box');
    const email = email_box.value;
    let your_email=email;

    if (return_validate_email()) {

        contentArea.style.display = "none";
        message.style.display = "block";
        para.textContent=`A confirmation email has been sent to ${your_email}
      .Please open it and click the button inside to confirm your subscription.`
    }
});


dismissBtn.addEventListener("click", () => {
    if (message.style.display === "block") {
        message.style.display = "none";
        contentArea.style.display = "grid";
    }
});


