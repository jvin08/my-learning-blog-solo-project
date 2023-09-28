import  blogData  from "./data.js"
import { render } from "./index.js"
let lastThreePosts = blogData.slice(blogData.length - 4, blogData.length)
render(lastThreePosts)