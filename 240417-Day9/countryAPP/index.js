let container = document.querySelector("container");
fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries")
.then(function(res){
    return res.json();
})
.then(function(data){
    // console.log(data);
    showData(data)
})
.catch(function(error){
    console.error("fetching error: ",error)
})

function showData(arr){
    arr.forEach(function(ele,i){
        let box = document.createElement("div");

        let rank = document.createElement("h3")
        rank.innerHTML = ele.Rank

        let country = document.createElement("h3")
        country.innerText = ele.country


        box.append(rank)
        container.append(box)
    })
}