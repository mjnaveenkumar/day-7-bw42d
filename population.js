var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send()
 request.onload=function(){
    var data = request.response
    var result = JSON.parse(data)
     var res = result.filter((ele)=>ele.population<200000)
     //to display the filtered result countries
     var res1 = res.map((ele)=>`${ele.population}: ${ele.name.common}`)
     console.log(res1)
    }