
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }

async function showResults(){
    document.getElementById("results").style.display='none';
    document.getElementById("loading").style.display = 'block';

    await sleep(1000);
    displayresults();
    
}

function displayresults(){
    let P = parseFloat(document.getElementById("principalAmount").value);
    let n = parseFloat(document.getElementById("timePeriod").value)*12;
    let R = parseFloat(document.getElementById("rateOfInterest").value)/100/12;
    const EMI = document.getElementById("emi");
    const totalAmount = document.getElementById("totalAmount");
    const interestAmount = document.getElementById("interestAmount");
    const x = Math.pow(1 + R, n);
    const monthly = (P * x * R) / (x - 1);
    let c=(n*monthly)-P;
    totalAmount.value = (n*monthly).toFixed(4);
    interestAmount.value = c.toFixed(4);
    EMI.value=monthly.toFixed(4);
    document.getElementById("loading").style.display = 'none';
    document.getElementById("results").style.display='block';
}

