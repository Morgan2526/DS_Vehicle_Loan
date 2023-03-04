function getInfo(){
    let carMaker = document.getElementById("carMaker").value;
    let carModel = document.getElementById("carModel").value;
    let exShowRoom = document.getElementById("showRoomPrice").value;
    let onRoad = document.getElementById("roadPrice").value;
    localStorage.setItem("carMaker",carMaker);
    localStorage.setItem("carModel",carModel);
    localStorage.setItem("exShowRoom",exShowRoom);
    localStorage.setItem("onRoad",onRoad);
    console.log(carMaker,carModel,exShowRoom,onRoad);
}


function getInfo1(){
    let flag = true;

    let carMaker = localStorage.getItem("carMaker");
    let carModel = localStorage.getItem("carModel");
    let exShowRoom = localStorage.getItem("exShowRoom");
    let onRoad = localStorage.getItem("onRoad");
    console.log(carMaker,carModel,exShowRoom,onRoad);

    let name = document.getElementById("name").value;
    let birthdate = new Date(document.getElementById('birthDate').value);
    let employementDetails = document.getElementById("employementStatus").value;
    let yearlyIncome = document.getElementById("income").value;
    let existingEmi = document.getElementById("prevEMI").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let email = document.getElementById("email").value;
    let pancardButtons = document.querySelectorAll('input[name="pancard"]');
    let adharButtons = document.querySelectorAll('input[name="adhar"]');
    let genderButtons = document.querySelectorAll('input[name="gender"]');
    let gender;
    let adhar;
    let pan;

    for (let i = 0; i < pancardButtons.length; i++) {
        if (pancardButtons[i].checked) {
          pan = pancardButtons[i].value;
          break; 
        }}
    
    for (let i = 0; i < adharButtons.length; i++) {
        if (adharButtons[i].checked) {
          adhar = adharButtons[i].value;
          break; 
        }}

    for (let i = 0; i < genderButtons.length; i++) {
        if (genderButtons[i].checked) {
          gender = genderButtons[i].value;
          break; 
        }}
    
    console.log(pan,adhar);
    console.log(gender); 
    let today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    if (today.getMonth() < birthdate.getMonth() || (today.getMonth() == birthdate.getMonth() && today.getDate() < birthdate.getDate())) {
        age--;
    }

    if(age<18)
    {
        flag = false;
        console.log("underage!");
    }
    if(yearlyIncome<25000)
    {
        flag = false;
        console.log("income Not sufficient")
    }

    //have to add the calculated emi for asking loan
    // if(yearlyIncome>25000 && yearlyIncome<400000 && existingEmi>25000){
    //     flag=false;
    //     console.log("income not sufficient2");
    // }

    if(adhar == "no"){
        flag=false;
        console.log("adhar card required");

    }
    if(pan == "no"){
        flag=false;
        console.log("pancard required");
    }

    return flag;
}