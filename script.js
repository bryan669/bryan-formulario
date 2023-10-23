document.addEventListener("DOMContentLoaded", function() {
    const contacForm = document.getElementById("contact-form");
    const nameInput = documenet.getElementById("name");
    const emailInput = documenet.getElementById("email");
    const messageInput = documenet.getElementById("message");
    const nameError = documenet.getElementById("name-error");
    const emailError = documenet.getElementById("email-error");
    const messageError = documenet.getElementById("message-error");

    contactForm.addEventListener("submit", function(event) {
        let isVAlid = true;
        nameError.textContent = "";
        emailError.textContent="";
        messageError.textContent = "";

        if (nameInput.value === "") {
            nameError.textContent = "Por Favor, insira seu nome.";
            isValid = false;

        }

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPatttern.test(emailInput.value)) {
            emailError.textContent = "Por Favor, insira uma mensagem."
            isValid = false;
        }

        if (isValid) {
            event.preventDefault(); //Impede o envio do formulario se houver erros
        }
        
    })
});
