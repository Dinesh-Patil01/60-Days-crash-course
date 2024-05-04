let form = document.querySelector("form")
let tbody = document.querySelector("tbody")

loadLocalStorageData()

form.addEventListener("submit", function(e){
  e.preventDefault();

  let name = document.getElementById("name").value;
  let employeeID = document.getElementById("employeeID").value;
  let department = document.getElementById("department").value;
  let experience = document.getElementById("exp").value;
  let email = document.getElementById("email").value;
  let mobile = document.getElementById("mbl").value;
  let role = calculateRole(experience);

  let newRow = `
  <tr>
  <th>${name}</th>
  <th>${employeeID}</th>
  <th>${department}</th>
  <th>${experience}</th>
  <th>${email}</th>
  <th>${mobile}</th>
  <th>${role}</th>
  <th><button onclick="deleteRow(this)")>Delete</button></th>
</tr>
  `
tbody.innerHTML += newRow;
saveToLocalStorage()
form.reset();
});



function calculateRole(experience){
  if (experience > 5 ){
    return("Senior");
  }
else if (experience >= 2 && experience <= 5){
  return("Junior");
}
else{
  return("Fresher");
}
}

function deleteRow (row){
  let r = row.closest("tr");
  r.parentNode.remove(r);
  saveToLocalStorage();
}

function saveToLocalStorage(){
  let rows = tbody.querySelectorAll("tr")
  const data = []

  rows.forEach((row)=>{
    let rowData = {
      name : row.cells[0].textContent,
      employeeID : row.cells[1].textContent,
      department : row.cells[2].textContent,
      experience : row.cells[3].textContent,
      email : row.cells[4].textContent,
      mobile : row.cells[5].textContent,
      role : row.cells[6].textContent,
    }
    data.push(rowData);
  });

  localStorage.setItem("employeeData", JSON.stringify(data));

}

function loadLocalStorageData(){
  let storeData = JSON.parse(localStorage.getItem("employeeData"))
  storeData.forEach(data=>{
   let newRow = `
   <tr>
    <th>${data.name}</th>
    <th>${data.employeeID}</th>
    <th>${data.department}</th>
    <th>${data.experience}</th>
    <th>${data.email}</th>
    <th>${data.mobile}</th>
    <th>${data.role}</th>
    <th><button onclick="deleteRow(this)")>Delete</button></th>
  </tr>`
  tbody.innerHTML += newRow;
  })

}