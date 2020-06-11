
var fromSelect = document.getElementById("from-select"),
    toSelect = document.getElementById("to-select"),
    input = document.getElementById('amount'),
    show =document.getElementById("show"),
    arr;
    

$.getJSON("https://v6.exchangerate-api.com/v6/640a17b6539d13729a54658f/latest/USD",function(data){
    
    arr = Object.keys(data.conversion_rates);
    /*
    console.log(data);
    console.log(arr);
    */
    arr.map((rateName)=>{
        var option = document.createElement("OPTION");
        option.innerHTML = rateName ; 
        option.value = rateName;
        fromSelect.appendChild(option);
        var option = document.createElement("OPTION");
        option.innerHTML = rateName ; 
        option.value = rateName;
        toSelect.appendChild(option);
    })
    input.value      = data.conversion_rates['USD'];
    show.innerText   = data.conversion_rates['EGP'].toFixed(2) + " EGP";
    fromSelect.value = "USD";
    toSelect.value   = "EGP";

})


function convertion()
{
    $.getJSON("https://v6.exchangerate-api.com/v6/640a17b6539d13729a54658f/latest/USD",function(data){
        var orderAmount = 0;
        var convertAmount =0;
        var rateOrder =0;
        var rateConvert = 0;
        rateOrder   = data.conversion_rates[fromSelect.value];
        rateConvert = data.conversion_rates[toSelect.value];
        orderAmount = Number(input.value);
        if(orderAmount >= 0)
        {
            convertAmount = (orderAmount*rateConvert)/rateOrder;
        }
        /*
        console.log(convertAmount);
        console.log(toSelect.value);
        */
        show.innerText = 
        convertAmount.toFixed(2)+" " + toSelect.value ;
    })
}
    