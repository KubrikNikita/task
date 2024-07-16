const userIdWrap = document.querySelector('#user__id_wrap');
const userIdInput = document.querySelector('#user__id_input');
const but = document.querySelector("#user__id_button")
const dots = document.querySelector('.dots')
const link = 'https://api.edamam.com/search?app_id=900da95e&app_key=40698503668e0bb3897581f4766d77f9&'
const nameLink = 'q='
let count = 0;
const getAnything = async (value) => {
    const jsonRes = await fetch(`${link}${nameLink}${value}&`)
    return res = await new Promise(resolve => setTimeout(async () => {
        resolve(await jsonRes.json());
    }, 1000));
}
const getItem = async () => {
    return await getAnything(`${userIdInput.value}`)
}

const debounce = (fn, ms) => {
    let timeout;
    return function() {
        const fnCall = () => {fn.apply(this, arguments)}
        clearTimeout(timeout);
        timeout = setTimeout(fnCall, ms);
    }
}
func = async() => {
        generateLoader(userIdWrap)
        const item = await getItem();
        if (!item?.q){
            userIdWrap.innerHTML = `<h1>Рецепт не найден</h1>`
            return;
        }
        if  (userIdWrap !== undefined) {
            userIdWrap.innerHTML = ''
        }
    
        for (let i = 0; i<10; i++){
            generateHtmlItem(item.hits[i].recipe.label,item.hits[i].recipe.healthLabels, userIdWrap)
        }
        return
    }


func = debounce(func, 1000);
userIdInput.addEventListener('keyup',func)

function generateHtmlItem(label, healthLabels, wrap) {

    const node = document.createElement("div")
    wrap.appendChild(node)
    node.innerHTML = `<h1>${label}</h1><p>${healthLabels}</p>`
}

function generateLoader(wrap) {
    const node = document.createElement("div")
    node.classList.add("dots")
    node.innerHTML = `<div class="dot"></div>\n<div class="dot"></div>\n<div class="dot"></div>`;
    wrap.appendChild(node)
    
}










