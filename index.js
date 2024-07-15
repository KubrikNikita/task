const postsButton = document.querySelector('#posts__button')
const body = document.querySelector('p')
const title = document.querySelector('h1')
const postsWrap = document.querySelector('#posts__wrap')
const dotsElementPosts = document.querySelector('#dots__posts');
const usersButton = document.querySelector('#users__button')
const usersWrap = document.querySelector('#users__wrap')
const dotsElementUsers = document.querySelector('#dots__users');
let count = 0;
const link = 'https://jsonplaceholder.typicode.com'

const getAnything = async (value) => {
    const jsonRes = await fetch(`${link}/${value}`)
    return res = await new Promise(resolve => setTimeout(async () => {
            resolve(await jsonRes.json());
        }, 1000));
}

const  getPosts  = async () => {
    return await getAnything('posts')
}

dotsElementPosts.classList.add("hidden")
postsButton.addEventListener('click', async () => {
    dotsElementPosts.classList.add("show");
    count = 0;

    const posts = await getPosts()
    
    generateHtmlPosts(posts.slice(0, 19));
    dotsElementPosts.classList.replace("show", "hidden");
})

function generateHtmlPosts(arr) {
    for (let i = 0; i < arr.length; i++) {
        const currentItem = arr[i]
        const node = document.createElement("div")
        node.innerHTML = `<h1>${currentItem.title}</h1>\n<p>${currentItem.body}</p>`
        postsWrap.appendChild(node)
    }
}
const getUsers = async () => {
    const jsonRes = await fetch('https://jsonplaceholder.typicode.com/users')
    const res = await jsonRes.json()
    return res;
}

dotsElementUsers.classList.add("hidden")
usersButton.addEventListener('click', async () => {
    dotsElementUsers.classList.add("show");
    count = 0;
    const users = await new Promise(resolve => setTimeout(async () => {
        resolve(await getUsers());
    }, 2000));
    generateHtmlUsers(users);
    dotsElementUsers.classList.replace("show", "hidden");
})
function generateHtmlUsers(arr) {
    for (let i = 0; i < arr.length; i++) {
        const currentItem = arr[i]
        const node = document.createElement("div")
        node.innerHTML = `<h1>${currentItem.name}</h1>\n<p>${currentItem.username}</p>`
        usersWrap.appendChild(node)
    }
}







