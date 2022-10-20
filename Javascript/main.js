let url = 'https://jsonplaceholder.typicode.com/users'
renders(url)
let template = renderElement("template").content
let parent = renderElement(".cards")
let form = renderElement("form")
let object = {
    name: null, 
    year: null,
    image: null
}
function creates(value){
    value.preventDefault()
    let input = renderElement(".search")
    let clone = template.cloneNode(true)
    let img = clone.querySelector(".card-img-top")
    img.src = 'https://picsum.photos/250/250'
    let title = clone.querySelector(".card-title")
    title.innerHTML= input.value
    object.name = title.textContent
    let years = clone.querySelector(".card-year")
    years.textContent = title.textContent.length*2
    object.year = years.textContent
    console.log(object)
    posts(object)
    parent.appendChild(clone)
}
form.addEventListener("submit", creates)
function renders(url){
    axios(url)
    .then((response) => {
        renderCard(response.data)
})
}
function renderCard(arr){
    for(let i = 0; i<arr.length; i++){
        let clone = template.cloneNode(true)
        let img = clone.querySelector(".card-img-top")
        img.src = 'https://picsum.photos/250/250'
        let title = clone.querySelector(".card-title")
        title.innerHTML= arr[i].name
        let year = clone.querySelector(".card-year")
        year.textContent = title.textContent.length*2
        parent.appendChild(clone)       
    }
}
function posts(object){
    axios({
        url: "https://reqres.in/api/users", 
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(object)
    })
    .then((response) => {
        return console.log(response.data)
    })
}