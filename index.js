import  blogData  from "./data.js"
import { postsArray } from "./index5.js"

// setTimeout(()=>console.log(postsArray),500)


const showAllButton = document.getElementById('view-more')
const navbar = document.querySelector('nav')
const postContainerEl = document.getElementById('blog-container')

let showAll = false


document.addEventListener('click',  function(e){
    if(e.target.id === 'view-more'){
        viewMore()
    }
})
document.getElementById('burger').addEventListener('click', openNavbar)


function openNavbar() {
   navbar .classList.toggle('hidden')
}

function viewMore(){
    showAll = !showAll

    showAllButton.innerHTML = showAll ? `Show less` : `View more`
    render(blogData)
    // setTimeout(render(postsArray),500)
}

function render (posts){
    let renderRange = 4;

    if(showAll){
        // render all posts
        renderRange = posts.length
    } else {
        // render only 6 posts
        renderRange = 7
    }
    let newPosts = posts.slice().reverse()

    postContainerEl.innerHTML = ""

    for (let i = 1; i < Math.min(renderRange, newPosts.length); i++) {
        const post = newPosts[i];
        const div = document.createElement('div')
        div.className = `blog-post`
        div.innerHTML = `<img src="${post.imageURL}" alt="${post.alt}">
                                    <p class="date">${post.date}</p>
                                    <h2>${post.title}</h2>
                                    <p>${post.content}</p>`
        postContainerEl.append(div)
    }
}
render(blogData)
// setTimeout(render(postsArray),500)
export { render }