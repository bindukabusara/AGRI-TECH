const forms = document.querySelector(".forms"),
    pwShowHide = document.querySelectorAll(".eye-icon"),
    links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySeletorAll(".password");

        pwFields.forEach(password => {
            if (password.type === "password") {
                password.type = "text";
            }
        })

    })
})

