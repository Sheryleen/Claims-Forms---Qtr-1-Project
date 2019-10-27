/// create variables///
const row = document.getElementById("tableRow");
const memberClaims = document.getElementById("memberClaims");
const tableBody = document.getElementById("table");

//create get request//

axios.get(`http://localhost:3000/claims`).then(response => {
  let memberClaims = response.data;

  ///variables///
  const tableBody = document.getElementById("table");

  // iterating through data with loop//

    for (let i = 0; i < memberClaims.length; i++) {
        let fault = memberClaims[i].atFault
        if (fault === true) {
            fault = "At Fault"
        }
        if (fault === false) {
            fault = "Not At Fault";
        }
    
  //create element tr for table row//  
    const tableRow = document.createElement("tr");
    tableRow.innerHTML = `
          
        <td>${memberClaims[i].id}</td>
        <td>${memberClaims[i].memberName}</td>
        <td>${memberClaims[i].policyNumber}</td>
        <td>${memberClaims[i].vehicle}</td>
        <td>${fault}</td>
        <td>${memberClaims[i].opName}</td>
        <td>${memberClaims[i].opVehicle}</td>
        <td>${memberClaims[i].opInsurance}</td>
        <td> 
        <button id="${
          memberClaims[i].id
        }" class ='btn-sm btn btn-danger'>delete</button>
        </td>
        `;
    //adding row to the table body//
      tableBody.appendChild(tableRow);

      tableRow.addEventListener("click", () => {
      
//delete row from claims data//
      axios
        .delete(`http://localhost:3000/claims/${memberClaims[i].id}`)
        .then(response => console.log(response));
    });
  }
});
