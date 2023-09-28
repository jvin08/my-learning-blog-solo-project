import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js'
import { getDatabase, ref, push, onValue  } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js'



const appSettings = {
    databaseURL: "https://my-learing-blog-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)

const database = getDatabase(app)
const postsListInDB = ref(database, "blog")

let postsArray = []
const inputFieldEl = document.getElementById('post-text')
const saveButtonsDivEl = document.getElementById('save-btns')
const savePostButtonEl = document.getElementById('save-post')
const declinePostButtonEl = document.getElementById('decline-post')
const imageURLEl = document.getElementById('image-url')
const titleEl = document.getElementById('title')


const clearInputFieldEl = () =>{
    titleEl.value=''
    inputFieldEl.value=''
    imageURLEl.value=''
    // console.log('input fields cleaned');
}

onValue(postsListInDB, function(snapshot){
    if(snapshot.exists()){
        let tempArray = Object.values(snapshot.val())
        for (let i = 0; i < tempArray.length; i++) {
            postsArray.unshift(tempArray[i])
        }
    }  

})

if(declinePostButtonEl){
    clearInputFieldEl();
}

if(savePostButtonEl){
    // use this prevent  saving post
savePostButtonEl.addEventListener('mouseover', function(){
    saveButtonsDivEl.classList.toggle('reverse')
})
    // turn on  to save post in DB
// savePostButtonEl.addEventListener("click", function(e){
//     e.preventDefault()
//     const title = titleEl.value
//     let inputValue = inputFieldEl.value;
//     const imageURL = imageURLEl.value
//     const alt = title.split(' ').slice(0, 4).join(' ')
//     const currentDate = new Date();
//     const dateStyle =  { dateStyle:'long' }
//     const formattedDate = currentDate.toLocaleString('en-US', dateStyle).toUpperCase()
//     const blogPostObject = {
//         date: formattedDate,
//         imageURL: imageURL,
//         alt: alt,
//         title: title,
//         content: inputValue
//     }
//     inputValue && title && imageURL &&  push(postsListInDB, blogPostObject);
//     clearInputFieldEl();
// })
}


export { postsArray }
