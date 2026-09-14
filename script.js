emailjs.init("TU_PUBLIC_KEY");

document.addEventListener("DOMContentLoaded", () => {
    const titleElement = document.querySelector(".glow-title");
    const textToType = "Full Stack Developer";
    let index = 0;

    if (titleElement) {
        titleElement.textContent = "";

        function typeWriter() {
            if (index < textToType.length) {
                titleElement.textContent += textToType.charAt(index);
                index++;
                setTimeout(typeWriter, 100);
            }
        }

        typeWriter();
    }
});

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const btnSubmit = document.getElementById('btn-submit');
    const responseDiv = document.getElementById('form-response');

    btnSubmit.disabled = true;
    btnSubmit.innerText = 'Enviando...';

    const serviceID = 'TU_SERVICE_ID';
    const templateID = 'TU_TEMPLATE_ID';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            responseDiv.className = 'alert alert-success mt-2 mb-0 small';
            responseDiv.innerText = '¡Mensaje enviado con éxito! Pronto lo revisaré y me pondré en contacto contigo.';

            document.getElementById('contact-form').reset();
            btnSubmit.disabled = false;
            btnSubmit.innerText = 'Enviar mensaje';
        }, (error) => {
            responseDiv.className = 'alert alert-danger mt-2 mb-0 small';
            responseDiv.innerText = 'Ocurrió un error al enviar el mensaje. Inténtalo de nuevo o escríbeme directamente a mi correo.';

            btnSubmit.disabled = false;
            btnSubmit.innerText = 'Enviar mensaje';
        });
});