const button = document.querySelector('#button')
const body = document.querySelector('p')
const title = document.querySelector('h1')
const wrap = document.querySelector('#wrap')
const getPosts = async () => {
    const jsonRes = await fetch('https://jsonplaceholder.typicode.com/posts')
    const res = await jsonRes.json()
    return res;
}

button.addEventListener('click', async (event) => {
    event.preventDefault()
    const posts = await getPosts()
    generateHtml(posts.slice(0,19))
    console.log(posts)
})

function generateHtml(arr) {
    for (let i = 0; i < arr.length; i++) {
        const currentItem = arr[i]
        const node = document.createElement("div")
        node.innerHTML = `<h1>${currentItem.title}</h1>\n<p>${currentItem.body}</p>`
        wrap.appendChild(node) 
    }
}


