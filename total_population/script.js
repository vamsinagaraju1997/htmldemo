// var request= new XMLHttpRequest();

// request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true);

// request.send();

// request.onload=function(){
    
//     var data=JSON.parse(request.response);
//     console.log(data);

//     for(var i in data){
//         var name = data[i].name;
//         var lang = data[i].latlng
//         vam(name,...lang)
//     }

//     // data.forEach(ele=>console.log(`${ele.name}-${ele.latlng[0]}, ${ele.latlng[1]}`))

// }



// function vam(name,lat,lon){
// var url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=8d0ba68803bf2e1dbfb857bbe8f1a50b`;
// var request= new XMLHttpRequest();
// request.open('GET',url,true);
// request.send();
// request.onload=function(){
//     var data=JSON.parse(request.response);
//     console.log(`${name}-${data.main.temp}`);
// }
// }






var request= new XMLHttpRequest();

request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true);

request.send();

request.onload=function(){
   
    var data=JSON.parse(request.response);
    console.log(data);

    for(var i in data){
        try{
            var name=data[i].name;
            var lang=data[i].latlng;
            if(lang.length === 0) throw new Error("Longitude not found ");
            wd(name,...lang);
        }catch(e){
           console.log("invalid coordinates"+name+" "+e.message);
        }
       
    }
    // data.forEach(ele=>console.log(`${ele.name}-${ele.latlng[0]},${ele.latlng[1]}`));
}

function wd(name,lat,lon){
// console.log(name);
// console.log(lat);
// console.log(lon);
var url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b9d07e8d66a7c9c78d47685619746207`;
var request=new XMLHttpRequest();
request.open('GET',url,true);
request.send();
request.onload=function(){
   var data=JSON.parse(request.response);
    console.log(`${name}-${data.main.temp}`);
}
}