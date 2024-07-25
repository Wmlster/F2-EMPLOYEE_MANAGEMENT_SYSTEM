let tbody = document.querySelector("tbody");

let form = document.querySelector("form");

let button = document.querySelector("form>button");

let editrow = 0;

function EditRecord(event) {
  let buttonref = event.target;
  editrow = buttonref.parentNode.parentNode;

  form["name"].value = editrow.children[0].innerText;
  form["CompanyName"].value = editrow.children[1].innerText;
  form["salary"].value = editrow.children[2].innerText;
  form["gender"].value = editrow.children[3].innerText;
  form["role"].value = editrow.children[4].innerText;
  form["email"].value = editrow.children[5].innerText;

  console.log(editrow.children[4].innerText);

  button.innerText = "Update";
}

function DeleteRecord(event) {
  let buttonref = event.target;
  let row = buttonref.parentNode.parentNode;

  row.remove();
}

function AddEmployee(employee) {
  let tr = document.createElement("tr");

  for (let key in employee) {
    let td = document.createElement("td");

    td.innerText = employee[key];

    tr.appendChild(td);
  }

  let options = document.createElement("td");

  let div = document.createElement("td");

  div.id = "edit-delete";

  // creating delete option btn

  let deletebutton = document.createElement("button");
  deletebutton.innerText = "Delete";

  deletebutton.addEventListener("click", DeleteRecord);

  // creating edit option btn

  let editbutton = document.createElement("button");
  editbutton.innerText = "Edit";

  editbutton.addEventListener("click", EditRecord);

  options.appendChild(editbutton);

  div.append(deletebutton, editbutton);

  tr.appendChild(div);

  tbody.appendChild(tr);
}

function onsubmitform(event) {
  event.preventDefault();

  let employeedata = {
    name: form["name"].value,
    companyname: form["CompanyName"].value,
    salary: form["salary"].value,
    gender: form["gender"].value,
    role: form["role"].value,
    email: form["email"].value,
  };

  if (button.innerText == "Update") {
    editrow.children[0].innerText = form["name"].value;
    editrow.children[1].innerText = form["CompanyName"].value;
    editrow.children[2].innerText = form["salary"].value;
    editrow.children[3].innerText = form["gender"].value;
    editrow.children[4].innerText = form["role"].value;
    editrow.children[5].innerText = form["email"].value;

    button.innerText = "Add Employee";
  } else {
    AddEmployee(employeedata);
  }

  form.reset();
}

form.addEventListener("submit", onsubmitform);
