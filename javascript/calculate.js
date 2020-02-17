function calculate(){
    const total = parseFloat(document.getElementById("total").value);
    const rate = parseFloat(document.getElementById("rate").value);
    const tip = (total*rate)/100;
    const tax = (total*0.055);
    const gtotal = (total + (tip) + (tax));
    if(isNaN(tip)){
        tip = null;
    }

    document.getElementById("tip").innerHTML = '$' + tip;
    document.getElementById("tax").innerHTML = '$' + tax.toFixed(2);
    document.getElementById("gtotal").innerHTML = '$' + gtotal.toFixed(2);
    return false;
}