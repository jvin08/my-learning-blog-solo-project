document.getElementById('myForm').addEventListener('submit', clearMessageInput)

function clearMessageInput(e) {

    e.preventDefault()
    const messageEl = document.getElementById('message')

    if(messageEl.value){
        messageEl.value = ""
    }
}