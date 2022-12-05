var pop = new XMLHttpRequest();
pop.open("GET","https://restcountries.com/v3.1/all",true)
pop.send()
 pop.onload=function(){
    var data = pop.response
    var result = JSON.parse(data)
    var res = result.reduce((acc,cv)=>acc+cv.population,0)
    console.log(res)
    }