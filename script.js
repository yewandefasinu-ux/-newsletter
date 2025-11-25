const form = document.getElementById('form')
const errorText = document.getElementById('error')
const container = document.getElementById('container')
const sucesscontainer = document.getElementById('sucesscontainer')
const comfmess = document.getElementById('comfmess')

sucesscontainer.style.display = 'none'

form.addEventListener('submit',function(event){
    event.preventDefault()
    const email = document.getElementById('email').value.trim()

    if(email !==""&& email.includes('@')&&email.includes('.')){
        errorText.style.display="none"
        container.style.display = "none"
        sucesscontainer.style.display = 'block'
        comfmess.textContent = `A comfirmamiton email has been sent to ${email}. plsease open it and click the button to comfirm your submistion`
    }

    else{
        errorText.textContent = 'Vaild email required'
        errorText.style.color = 'red'
        errorText.style.display = 'block'

    }
})