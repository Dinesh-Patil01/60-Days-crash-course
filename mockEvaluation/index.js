let products = document.querySelector("#products")
let categorySelect = document.querySelector("#filterByCategory")
let priceSort = document.querySelector("#sortByPrice")
let getData = async(URL)=>{
    let res = await fetch (URL)
    let data = await res.json()
    console.log(data)
    showData(data)
}

let showData = (arr) =>{
    products.innerHTML=""
    arr.forEach((ele,i)=>{
    let div = document.createElement("div")
    let img = document.createElement("img")
    img.src = ele.image

    let title = document.createElement("h3")
    title.innerText = ele.title

    let price = document.createElement("p")
    price.innerText = "Rs: "+ele.price

    div.append(img,title,price)
    products.append(div)
    });
}

let handleCategoryChange = () =>{
    let value = categorySelect.value
    let URL = `https://fakestoreapi.com/products/category/${value}`
    getData(URL)
}

let handleSortPrice = () => {
    let value = priceSort.value
    let URL = `https://fakestoreapi.com/products?sort=${value}`
    getData(URL)
}

priceSort.addEventListener("change",handleSortPrice)
categorySelect.addEventListener("change",handleCategoryChange)
getData("https://fakestoreapi.com/products")