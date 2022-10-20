window.addEventListener("load", () => {
    let form = renderElement("form")
    let inputName = renderElement("#name_input")
    let inputEmail = renderElement("#email_input")
    let inputPassword = renderElement("#password_input")
    let result = []
    function maxs(e){
        e.preventDefault()
        result = [...result, inputName.value, inputEmail.value, inputPassword.value]
        console.log(result)
        if(result.includes("Shohijahon") && result.includes("shohijahonmusinkulov@gmail.com") && result.includes("82850406m")){
            console.log(true)
            window.location.replace("./index.html")
        }else{
            console.log(false)
        }
    }   
    form.addEventListener("submit", maxs)   
})