//Codigo para el que el modal aparezca cuando envias tu email

window.onload = function() {

if(document.getElementById("btnModal")){
    let modal = document.getElementById("modalTry");
    let btn = document.getElementById("btnModal");
    let span = document.getElementsByClassName("closes")[0];
    let body = document.getElementsByTagName("body")[0];

        btn.onclick = function() {
        modal.style.display = "block";

        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    span.onclick = function() {
        modal.style.display = "none";

        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";

            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }
    }
   }
}

// Codigo para enviar email de bienvenida

const $forms = document.querySelectorAll(".signup-form");
const getTemplate = () => {
    return fetch(".template.html").then((response) => response.text());
};

const sendEmailToApi = (adress, template) => {
    fetch(`https://bedu-email-sender-api.herokuapp.com/send`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            adress: adress,
            template: template,
        }),
    })
        .then((results) => {
            console.log(results);
        })
        .catch((error) => {
            console.error(error);
        });
};

const sendEmail = (event) =>{
    event.preventDefault();
    const email = event.target.querySelector("input").value;
    getTemplate()
    .then((template) => {
        sendEmailToApi(email,template);
    })
    .catch((error) => {
        console.log(error, "Error al convertir el template."):
    });
};

for (let i = 0; i < $forms.length; i++){
    $forms[i].addEventListener("submit", sendEmail);
}