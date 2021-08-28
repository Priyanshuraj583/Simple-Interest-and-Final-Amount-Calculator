function cal_si(){  
    
    var p = document.getElementById("p").value;
    var r = document.getElementById("rate").value;  
    var t = document.getElementById("time").value;
    var SI =(p*r*t)/100;

document.getElementById("result").innerText = "Simple Interest = " + SI;
}
function fin_amnt(){
    var p = document.getElementById("p").value;
    var r = document.getElementById("rate").value;  
    var t = document.getElementById("time").value;
    var fin_amount=p*(1+(r*t)/100);
    document.getElementById("fin_amnt").innerText = "Final Amount = " + fin_amount;


}