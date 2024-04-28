let department = document.querySelector("#departments")
let gender = document.querySelector("#genders")
let salary = document.querySelector("#sal")


let tbody = document.querySelector("tbody")

let getData=async(URL)=>{
    let res = await fetch(URL)
    let data = await res.json()
    showData(data) 
}

let showData = (arr)=>{
    tbody.innerHTML=""
    let originalData = arr.data;
    console.log(originalData)
    originalData.forEach((ele,i)=>{

        let row =document.createElement("tr")
        row.innerHTML=`<td>${i+1}</td>
                       <td>${ele.name}</td>
                       <td>${ele.gender}</td>
                       <td>${ele.department}</td>
                       <td>${ele.salary}</td>
                      ` 
        tbody.append(row)              
    })

}

department.addEventListener("change",()=>{
    let value = department.value
    let URL = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=1&limit=10&filterBy=department&filterValue=${value}`
    getData(URL)
    // console.log(value)
})


gender.addEventListener("change",()=>{
    let value = gender.value
    let URL = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=1&limit=10&filterBy=gender&filterValue=${value}`
    getData(URL)
    // console.log(value)
})

salary.addEventListener("change",()=>{
    let value = salary.value
    let URL = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=1&limit=10&filterBy=gender&filterValue=female&sort=salary&order=${value}`
    getData(URL)
    // console.log(value)
})


getData("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees")