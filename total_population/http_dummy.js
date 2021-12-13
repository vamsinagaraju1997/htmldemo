var req = new XMLHttpRequest()
req.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json', true)
req.send();
req.onload=function(){
    var data=JSON.parse(req.response);
    console.log(data);
    for(var i=0;i<data.length; i++){
        console.log(data[i].name, data[i].capital, data[i].flag)
    }
}
