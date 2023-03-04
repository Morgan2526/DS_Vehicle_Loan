
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }

async function showResults(){

    document.getElementById("loading").style.display = 'block';

    await sleep(2000);
    displayresults();
    
}

function displayresults(){
    let p = document.getElementById("")
    document.getElementById("loading").style.display = 'none';
    document.getElementById("results").style.display='block';
}

