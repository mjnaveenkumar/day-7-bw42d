let xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all")
xhr.send();
xhr.onload = () => {
    let data = JSON.parse(xhr.response)
     /* console.log(data) */
    let answer = data.filter((dummy) => (dummy.region !== undefined))
    console.log(answer.length)
    let realanswer = answer.filter((data) =>  {
    for (let key in data.region) {
        if(data.region[key].name === "asia"){
      return data
      }
    }
    })
    console.log(realanswer.length, realanswer[0].region)
}

