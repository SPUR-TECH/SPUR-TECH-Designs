function sendMail(contactForm) {
    emailjs.send("service_rksy4xi", "template_ee26mpk", {
            "from_name": contactForm.name.value,
            "project_request": contactForm.projectsummary.value,
            "from_email": contactForm.emailaddress.value,
            "reply_to": contactForm.emailaddress.value

        })
        .then(
            function (response) {
                $("#success").text("Message Sent");
                $("#success").css("background-color", "green");
                $(".center-form form").get(0).reset();
            },
            function (error) {
                console.log("FAILED", error);
            }
        );


    return false; // To block from loading a new page
}