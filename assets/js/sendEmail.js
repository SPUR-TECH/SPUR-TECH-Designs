function sendMail(contactForm) {
    emailjs.send("service_rksy4xi", "template_ee26mpk", {
            "from_name": contactForm.name.value,
            "project_request": contactForm.projectsummary.value,
            "from_email": contactForm.emailaddress.value,
            "reply_to": contactForm.emailaddress.value

        })
        .then(
            function (response) {
                console.log("SUCCESS", response);
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    return false; // To block from loading a new page
}