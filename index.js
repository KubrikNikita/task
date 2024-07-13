const button = document.querySelector('#button')
const body = document.querySelector('p')
const title = document.querySelector('h1')
const wrap = document.querySelector('#wrap')
const dotsElement = document.querySelector('#dots');
let count = 0;

const getPosts = async () => {
    const jsonRes = await fetch('https://jsonplaceholder.typicode.com/posts')
    const res = await jsonRes.json()
    return res;
}
dotsElement.classList.add("hidden")
button.addEventListener('click', async () => {
    dotsElement.classList.add("show");
    count = 0;
    const posts = await new Promise(resolve => setTimeout(async () => {
        resolve(await getPosts());
    }, 2000));
    generateHtml(posts.slice(0, 19));
    dotsElement.remove();
})

function generateHtml(arr) {
    for (let i = 0; i < arr.length; i++) {
        const currentItem = arr[i]
        const node = document.createElement("div")
        node.innerHTML = `<h1>${currentItem.title}</h1>\n<p>${currentItem.body}</p>`
        wrap.appendChild(node)
    }
}






