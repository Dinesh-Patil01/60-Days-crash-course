let employeeName = document.querySelector("#name");
let employeeId = document.querySelector("#employeeID");
let department = document.querySelector("#department");
let experience = document.querySelector("#exp");
let email = document.querySelector("#email");
let number = document.querySelector("#mbl");
let btn = document.querySelector("#btn");


let data = []

function saveData(){
    localStorage.setItem("data",JSON.stringify(data))
}

function loadData(){
    let storedValue = JSON.parse(localStorage.getItem("data"))
    
    if(storedValue){
      data = storedValue
      showData(data)
    }

}

function handleClick(){
    let obj = {
        name : employeeName.value,
        id : employeeId.value,
        department: department.value,
        experience: experience.value,
        email: email.value,
        number: number.value,
    }
    data.push(obj)

    saveData()    
    saveData(data)
    console.log(data);
}

function showData(arr){
  tableBody.innerHTML = ""
  arr.array.forEach(function(ele,i) {
    let tr = document.createElement("tr")

    let td1 = document.createElement("td")
    td1.innerHTML = ele.name

    let td2 = document.createElement("td")
    td2.innerHTML = ele.id

    let td3 = document.createElement("td")
    td3.innerHTML = ele.department

    let td4 = document.createElement("td")
    td1.innerHTML = ele.experience

    let td5 = document.createElement("td")
    td2.innerHTML = ele.email

    let td6 = document.createElement("td")
    td3.innerHTML = ele.number


    let td7 = document.createElement("td")
       let btn = document.createElement("button")
       btn.innerHTML = "Delete"
       btn.addEventListener("click" ,function(){
        handleDelete(i)
       })
       td7.append(btn)

       tr.append(td1 , td2 , td3 , td4 ,td5 , td6 , td7)
       tableBody.append(tr)

  });
}

function handleDelete(index){

  data = data.filter(function (ele,i){
        return index!==i
  })
 
  saveData()
  showData(data)



btn.addEventListener("click",handleClick)


