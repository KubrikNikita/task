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


const getPosts = async () => {
    return await getAnything('posts')
}

dotsElementPosts.classList.add("hidden")
postsButton.addEventListener('click', async () => {
    dotsElementPosts.classList.add("show");
    count = 0;

    const posts = await getPosts()

    generateHtml(posts.slice(0, 19), postsWrap);
    dotsElementPosts.classList.replace("show", "hidden");
})


const getUsers = async () => {
    return await getAnything('users')
}

dotsElementUsers.classList.add("hidden")

usersButton.addEventListener('click', async () => {
    dotsElementUsers.classList.add("show");
    count = 0;
    const users = await getUsers();
    const userToTitle = users.map((item) => {
        const newObj = {}
        newObj.title = item.name
        newObj.body = item.username
        return newObj
    })
    generateHtml(userToTitle, usersWrap);
    dotsElementUsers.classList.replace("show", "hidden");
})


 





