const postsButton = document.querySelector('#posts__button')
const body = document.querySelector('p')
const title = document.querySelector('h1')
const postsWrap = document.querySelector('#posts__wrap')
const usersButton = document.querySelector('#users__button')
const usersWrap = document.querySelector('#users__wrap')
const userIdWrap = document.querySelector('#user__id_wrap');
const userIdButton = document.querySelector('#user__id_button');
const userIdInput = document.querySelector('#user__id_input');
const dots = document.querySelector('.dots')
const link = 'https://jsonplaceholder.typicode.com'
let count = 0;



const getAnything = async (value) => {
    const jsonRes = await fetch(`${link}/${value}`)
    return res = await new Promise(resolve => setTimeout(async () => {
        resolve(await jsonRes.json());
    }, 1000));
}


const getPosts = async () => {
    return await getAnything('posts')
}

postsButton.addEventListener('click', async () => {
    generateLoader(postsWrap);
    count = 0;
    const posts = await getPosts()
    if  (postsWrap !== undefined) {
        postsWrap.innerHTML = ''
    } 
    generateHtml(posts.slice(0, 19), postsWrap);
   
})
dots.remove()

const getUsers = async () => {
    return await getAnything('users')
}

usersButton.addEventListener('click', async () => {
    generateLoader(usersWrap);
    count = 0;
    const users = await getUsers();
    const userToTitle = users.map((item) => {
        const newObj = {}
        newObj.title = item.name
        newObj.body = item.username
        return newObj
    })
    if  (usersWrap !== undefined) {
        usersWrap.innerHTML = ''
    } 
    generateHtml(userToTitle, usersWrap);
})

const getUserById = async () => {
    return await getAnything(`users/${userIdInput.value}`)

}

userIdButton.addEventListener('click', async () => {
    generateLoader(userIdWrap);
    count = 0;
    const user = await getUserById();
    if (!user?.name) {
        userIdWrap.innerHTML = `<h1>Юзер не найден</h1>`
        return;
    }
    if  (userIdWrap !== undefined) {
        userIdWrap.innerHTML = ''
    } 
    generateHtmlUserId(user, userIdWrap);
})


function generateHtml(arr, wrap) {
    for (let i = 0; i < arr.length; i++) {
        const currentItem = arr[i]
        const node = document.createElement("div")
        node.innerHTML = `<h1>${currentItem.title}</h1>\n<p>${currentItem.body}</p>`
        wrap.appendChild(node)
    }
    
}

function generateHtmlUserId(obj, wrap) {
    const node = document.createElement("div")
    wrap.appendChild(node)
    node.innerHTML = `<h1>${obj.name}</h1>\n<p>${obj.username}</p>`
}

function generateLoader(wrap) {
    const node = document.createElement("div")
    node.classList.add("dots")
    node.innerHTML = `<div class="dot"></div>\n<div class="dot"></div>\n<div class="dot"></div>`;
    wrap.appendChild(node)
    
}








