//create variables//
const myForm = document.getElementById("myForm");
const policyNumber = document.getElementById("policyNumber");
const memberName = document.getElementById("memberName");
const atFault = document.getElementById("atFault");
const inputVehicle = document.getElementById("vehicle");
const opName = document.getElementById("opName");
const opVehicle = document.getElementById("opVehicle");
const opInsurance = document.getElementById("opInsurance");


//create post//
myForm.addEventListener("submit", e => {
  e.preventDefault();
//posting input data to manage claims form//
  axios
    .post(`http://localhost:3000/claims`, {
      policyNumber: `${policyNumber.value}`,
      memberName: `${memberName.value}`,
      atFault: `${atFault.value}`,
      vehicle: `${vehicle.value}`,
      opName: `${opName.value}`,
      opVehicle: `${opVehicle.value}`,
      opInsurance: `${opInsurance.value}`
    })
   //using window to redirect the page// 
    .then(response => { window.location.replace('/index.html') });
});
